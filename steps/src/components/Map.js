import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapboxgl from "mapbox-gl";
import Rotas from "../components/data/routes.json";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Modal from "react-modal";
import ModalPin from "./ModalPin";
import { openModalPin, openManageModalPin } from "./redux/modalState";
import { sendId } from "./redux/ReduxModalInfo";
import ManageModalPin from "./ManageModalPin";

Modal.setAppElement("#root");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

const Map = () => {
  const dispatch = useDispatch();

  const { mapState } = useSelector((state) => state.mapState);
  const { singleRouteState } = useSelector((state) => state.singleRouteState);
  const { routeID } = useSelector((state) => state.routeID);
  const { pinStorage } = useSelector((state) => state.pinStorage);
  const { refreshConst } = useSelector((state) => state.refreshConst);

  const [clickedData, setClickedData] = useState([]);
  const [coordenadas, setCoordernadas] = useState([]);


  //Get pin storage elements
  const storage = useRef();
  storage.current = pinStorage;
  //

  //Check when the app wants a refresh - used in the useEffect dependency
  const refresh = useRef();
  refresh.current = refreshConst;
  //

  const coords = [];

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.getElementById("menu_bar").style.display = "none";
  }

  function closeModal() {
    setIsOpen(false);
    document.getElementById("menu_bar").style.display = "flex";
  }

  // existing routes
  const geojson = Rotas.map((value) => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [value.pins[0].long, value.pins[0].lat],
        },
        properties: {
          id: value.id,
          title: value.name,
          description: value.desc,
          creator: value.creator,
          category: value.category,
          pins: [
            value.pins.map((val) => ({
              pinName: val.pinName,
            })),
          ],
        },
      },
    ],
  }));


  // Pesquisar Rotas
  const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: "Pesquisa Rotas", // Placeholder text for the search bar
    language: "pt",
    country: "PT-01",
    types: "poi, address",
  });

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-8.654);
  const [lat, setLat] = useState(40.63);
  const [zoom, setZoom] = useState(16);
  const [pitch, setPitch] = useState(0);
  const [bearing, setBearing] = useState(0);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/stepsua/cl08ksukn001415muzw480uke",
      center: [lng, lat],
      pitch: pitch, // pitch in degrees
      bearing: bearing, // bearing in degrees
      zoom: zoom,
      attributionControl: false,
    });

    if (mapState === true) {
      //creation mode

      //check if there are points added to the store
      const StorageStatus = Object.keys(pinStorage).length;

      //map the pins if theres atleast one entry
      if (StorageStatus >= 1) {
        // Json for points being created

        // Converting object from redux store to array to then map.
        const pinsArray = Object.entries(pinStorage).map((obj) => ({ ...obj }));

        const geojsonPins = pinsArray.map((value) => ({
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [value[1].lng, value[1].lat],
              },
              properties: {
                id: value[1].id,
                name: value[1].name,
                description: value[1].desc,
              },
            },
          ],
        }));


        // function running on pin click
        const handleClick = (id, coordinates) => {
          map.easeTo({
            center: coordinates,
            zoom: 17,
            duration: 1000,
          });

          setClickedData({
            id: id,
            name: pinStorage[id].name,
            desc: pinStorage[id].desc,
            lat:  pinStorage[id].lat,
            lng: pinStorage[id].lng
          })

          setTimeout(() => {
            dispatch(openManageModalPin());
          }, 1250);
        }

        //add saved markers to the route being created
        geojsonPins.map((element) => {
          const el = document.createElement("div");
          el.className = "marker";
          el.addEventListener("click", function(e){
            e.stopPropagation();
            handleClick(element.features[0].properties.id, element.features[0].geometry.coordinates)
          });
          new mapboxgl.Marker(el)
            .setLngLat(element.features[0].geometry.coordinates)
            .addTo(map);
        });
      }

      // create markers on map click
      var marker = new mapboxgl.Marker({ color: "#F69E7C" });
      map.on("click", (e) => {
        var coordinates = e.lngLat;
        if (coordinates) {
          marker.setLngLat(coordinates).addTo(map);
          map.easeTo({
            center: marker.getLngLat(coordinates),
            zoom: 17,
            duration: 1000,
          });
          setCoordernadas({
            id: marker.getLngLat(coordinates).lat,
            lat: marker.getLngLat(coordinates).lat,
            lng: marker.getLngLat(coordinates).lng
          });

        }
        setTimeout(() => {
          dispatch(openModalPin());
        }, 1250);
      });
    } else {
      // Make a Map Matching request
      async function getMatch(coordinates, radius, profile) {
        // Separate the radiuses with semicolons
        const radiuses = radius.join(";");
        // Create the query
        const query = await fetch(
          `https://api.mapbox.com/matching/v5/mapbox/${profile}/${coordinates}?geometries=geojson&radiuses=${radiuses}&steps=true&language=pt&access_token=${mapboxgl.accessToken}`,
          { method: "GET" }
          // remove radiuses 
        );
        const response = await query.json();
        // Handle errors
        if (response.code !== "Ok") {
          alert(`${response.code} - ${response.message}.`);
          return;
        }
        const coords = response.matchings[0].geometry;
        // Draw the route on the map
        addRoute(coords);
        getInstructions(response.matchings[0]);
      }

      function getRotas(routeID) {
        const selectedRoute = Rotas.filter(function (val) {
          return val.id === routeID;
        });

        const profile = "walking"; // Set the profile

        const setPin = () => {
          selectedRoute.map((props) =>
            props.pins.map((e) => coords.push([e.long, e.lat]))
          );
        };

        setPin();

        const newCoords = coords.join(";");

        const radius = coords.map(() => 50);
        getMatch(newCoords, radius, profile);

        // Remover radius para aumentar o range 

        coords.splice(0, coords.length);
      }

      // Add the geocoder to the map
      map.addControl(geocoder);

      if (routeID === null) {
        geojson.map((element) => {
          const el = document.createElement("div");
          el.className = "marker";
          el.addEventListener("click", function(e){
            e.stopPropagation();
          });

          new mapboxgl.Marker(el)
            .setLngLat(element.features[0].geometry.coordinates)
            .addTo(map);
        });
      } else if (routeID != null) {
        map.removeControl(geocoder);

        const routeFromProfile = Rotas.filter(function (value) {
          return value.id === routeID;
        });

        const geojson2 = routeFromProfile.map((value) => ({
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [value.pins[0].long, value.pins[0].lat],
              },
              properties: {
                id: value.id,
                title: value.name,
                description: value.desc,
                creator: value.creator,
                category: value.category,
                pins: [
                  value.pins.map((val) => ({
                    pinName: val.pinName,
                  })),
                ],
              },
            },
          ],
        }));

        geojson2.map((element) => {
          const el = document.createElement("div");
          el.className = "marker";
          el.addEventListener("click", function(e){
            e.stopPropagation();
          });

          new mapboxgl.Marker(el)
            .setLngLat(element.features[0].geometry.coordinates)
            .addTo(map);
        });
      }

      function getInstructions(data) {
        // Target the sidebar to add the instructions
        const directions = document.getElementById("directions");
        let tripDirections = "";
        // Output the instructions for each step of each leg in the response object
        for (const leg of data.legs) {
          const steps = leg.steps;
          for (const step of steps) {
            tripDirections += `<li>${step.maneuver.instruction}</li>`;
          }
        }
        directions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
        )} min.</strong></p><ol>${tripDirections}</ol>`;
      }

      // Draw the Map Matching route as a new layer on the map
      function addRoute(coords) {
        // If a route is already loaded, remove it
        if (map.getSource("route")) {
          map.removeLayer("route");
          map.removeSource("route");
        } else {
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: coords,
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#F69E7C",
              "line-width": 8,
              "line-opacity": 0.8,
            },
          });
        }
      }

      const userLocation = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      });

      map.addControl(userLocation);
      if (routeID === null) {
        map.on("load", () => {
          userLocation.trigger();
        });
      }
    }

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, [mapState, singleRouteState, refreshConst]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      />
      <ModalPin data={coordenadas} />
      <ManageModalPin clicked={clickedData}/>
    </div>
  );
};

export default Map;
