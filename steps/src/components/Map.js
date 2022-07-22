import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Modal from "react-modal";
import {
  openModalPin,
  openManageModalPin,
  openModalConfirmarRota,
  openModalRota,
  openModalPontoInfo,
} from "./redux/modalState";
import ModalPin from "./modais/ModalPin";
import ManageModalPin from "./modais/ManageModalPin";
import Drawertest from "./Drawer";
import ModalConfirmarRota from "./modais/ModalConfirmarRota";
import ModalRota from "./modais/modalRota";
import { customAlphabet } from 'nanoid';
import ModalPontoInfo from "./modais/modalpontoinfo";

Modal.setAppElement("#root");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

const Map = (props) => {
  const nanoid = customAlphabet('1234567890abcdef', 10)
  const dispatch = useDispatch();

  const { mapState } = useSelector((state) => state.mapState);
  const { singleRouteState } = useSelector((state) => state.singleRouteState);
  const { routeID } = useSelector((state) => state.routeID);
  const { pinStorage } = useSelector((state) => state.pinStorage);

  const [clickedData, setClickedData] = useState([]);
  const [clickedMain, setClickedMain] = useState();
  const [coordenadas, setCoordernadas] = useState([]);

  const [clickedSingleRoute, setClickedSingleRoute] = useState()

  //Get pin storage elements
  const storage = useRef();
  storage.current = pinStorage;

  //check if there are points added to the store
  const StorageStatus = Object.keys(pinStorage).length;

  //check modal state to then conditional render other assets
  const ManageModalState = useSelector((state) => state.modalState.manageModalPin);
  const ManageModal = useRef();
  ManageModal.current = ManageModalState;

  const ModalPinState = useSelector((state) => state.modalState.modalPin);
  const PinState = useRef();
  PinState.current = ModalPinState;

  const ModalCancelarState = useSelector((state) => state.modalState.modalCancelar);
  const ModalCancelar = useRef();
  ModalCancelar.current = ModalCancelarState;

  const ModalFinalizarRota = useSelector((state) => state.modalState.modalConfirmarRota);
  const ModalConfirmar = useRef();
  ModalConfirmar.current = ModalFinalizarRota;

  const EstadoModalRota = useSelector((state) => state.modalState.modalRota);
  const ModalRotaState = useRef();
  ModalRotaState.current = EstadoModalRota;

  const ModalRotaTerminada= useSelector((state) => state.modalState.modalAddRota)
  const ModalRotaTerminadaState= useRef()
  ModalRotaTerminadaState.current = ModalRotaTerminada
  //

  //user location
  const userLocation = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  });


  const coords = [];
 
  // Existing routes

  // Pesquisar Rotas
  const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: "Pesquisa Locais", // Placeholder text for the search bar
    language: "pt",
    country: "PT-01",
    types: "poi, address",
  });

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-8.654);
  const [lat, setLat] = useState(40.63);
  const [zoom, setZoom] = useState(16);
  // const [pitch, setPitch] = useState(0);
  // const [bearing, setBearing] = useState(0);
  //

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/stepsua/cl08ksukn001415muzw480uke",
      center: [lng, lat],
      pitch: 0, // pitch in degrees
      bearing: 0, // bearing in degrees
      zoom: zoom,
      attributionControl: false,
    });


    if (props.rotas !== undefined) {
      const geojson = props.rotas.map((value) => ({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [value.pins[0].long, value.pins[0].lat],
            },
            properties: {
              id: value._id,
              title: value.name,
              description: value.desc,
              creator: value.creator.name,
              category: value.category.category,
              color: value.category.color,
              pins: [
                value.pins.map((val) => ({
                  pinName: val.pinName,
                  lat: val.lat,
                  long: val.long
                })),
              ],
            },
          },
        ],
      }));

    if (mapState === true) {
      //creation mode

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
            lat: pinStorage[id].lat,
            lng: pinStorage[id].lng,
          });

          setTimeout(() => {
            dispatch(openManageModalPin());
          }, 1250);
        };

        //add saved markers to the route being created
        geojsonPins.map((element) => {
          const el = document.createElement("div");
          el.className = "marker";
          el.addEventListener("click", function (e) {
            e.stopPropagation();
            handleClick(
              element.features[0].properties.id,
              element.features[0].geometry.coordinates
            );
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
            id: nanoid(),
            lat: marker.getLngLat(coordinates).lat,
            lng: marker.getLngLat(coordinates).lng,
          });
        }
        setTimeout(() => {
          dispatch(openModalPin());
        }, 1250);
      });
    } else {

      // Add the geocoder to the map
      map.addControl(geocoder);

      if (routeID === null) {
        const handleMain = (coordinates, id) => {
          map.easeTo({
            center: coordinates,
            zoom: 17,
            duration: 1000,
          });

          // filter clicked pin with DB information
          const rotaInfoMain = props.rotas.filter(function (val) {
            return val._id === id
          })

          setClickedMain({
            id: rotaInfoMain[0]._id,
            category: rotaInfoMain[0].category.category,
            color: rotaInfoMain[0].category.color,
            creator: rotaInfoMain[0].creator.name,
            RouteName: rotaInfoMain[0].name,
            RouteDesc: rotaInfoMain[0].desc,
            pins: [rotaInfoMain[0].pins.map((val) => ({
                pinName: val.pinName,
                pinDesc: val.pinDesc,
                long: val.long,
                lat: val.lat
            }))]
          })

          //set timeout and open modal
          setTimeout(() => {
            dispatch(openModalRota());
          }, 1250);
        };
        geojson.map((element) => {
          const el = document.createElement("div");
          switch (element.features[0].properties.color) {
            case '#5D5FEF':
              el.className = "markerCultura";
              break;
            case '#F178B6':
              el.className = "markerShopping";
              break;
            case '#68BDFA':
               el.className = "markerDesporto";
              break;
            case '#98D99A':
              el.className = "markerNatureza";
              break;
            case '#FE6A66':
              el.className = "markerGastronomia";
                break;
            case '#C129A9':
              el.className = "markerBares";
                break;
            case '#099F7B':
              el.className = "markerExperiencia";
                break;
            case '#F69E7C':
              el.className = "markerUnico";
                break;
            default:
              break;
          }
          el.addEventListener("click", function (e) {
            e.stopPropagation();
            handleMain(element.features[0].geometry.coordinates, element.features[0].properties.id);
          });

          new mapboxgl.Marker(el)
            .setLngLat(element.features[0].geometry.coordinates)
            .addTo(map);
        });
      } else 

      if (routeID != null) {

        function getRotas(routeID) {
          const selectedRoute = props.rotas.filter(function (val) {
            return val._id === routeID;
          });

          const routeColor = selectedRoute[0].category.color

          const profile = "walking"; // Set the profile
          const setPin = () => {
            selectedRoute.map((props) =>
              props.pins.map((e) => 
              coords.push([e.long,e.lat]),
              )
            );
          };
          setPin();
          console.log(coords);
          const newCoords = coords.join(";"); 
          getMatch(newCoords, profile, routeColor);

        }

        //  Make a Map Matching request
      async function getMatch(coordinates, profile, color) {

        // Create the query
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordinates}?alternatives=true&continue_straight=true&geometries=geojson&language=pt&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`,
          { method: "GET" }
        );
        const response = await query.json();
        console.log(response);
        const coords = response.routes[0].geometry;

        // Draw the route on the map
        addRoute(coords, color);
        getInstructions(response.routes[0]);
      }

        getRotas(routeID)

        map.removeControl(geocoder);


        const routeFromProfile = props.rotas.filter(function (value) {
          return value._id === routeID;
        });

        map.easeTo({
          center: [
            routeFromProfile[0].pins[0].long,
            routeFromProfile[0].pins[0].lat,
          ],
          zoom: 17,
          duration: 1000,
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
                id: value._id,
                title: value.name,
                description: value.desc,
                creator: value.creator,
                category: value.category.category,
                color: value.category.color,
                pins: [
                  value.pins.map((val) => ({
                    pinName: val.pinName,
                    pinDesc: val.pinDesc,
                    lat: val.lat,
                    long: val.long
                  })),
                ],
              },
            },
          ],
        }));


        const handleClickSingleRoute = (value, id) => {
          
          map.easeTo({
            center: [value.long, value.lat],
            zoom: 17,
            duration: 1000,
          });

          setClickedSingleRoute({
            pinName: value.pinName,
            pinDesc: value.pinDesc,
            lat: value.lat,
            long: value.long,
            id: id
          })

          //set timeout and open modal
          setTimeout(() => {
            dispatch(openModalPontoInfo());
          }, 1250);

        }

        geojson2.map((element) => {
          element.features[0].properties.pins[0].map((val) => {
            const el = document.createElement("div");
            switch (element.features[0].properties.color) {
              case '#5D5FEF':
                el.className = "markerCultura";
                break;
              case '#F178B6':
                el.className = "markerShopping";
                break;
              case '#68BDFA':
                 el.className = "markerDesporto";
                break;
              case '#98D99A':
                el.className = "markerNatureza";
                break;
              case '#FE6A66':
                el.className = "markerGastronomia";
                  break;
              case '#C129A9':
                el.className = "markerBares";
                  break;
              case '#099F7B':
                el.className = "markerExperiencia";
                  break;
              case '#F69E7C':
                el.className = "markerUnico";
                  break;
              default:
                break;
            }
            el.addEventListener("click", function (e) {
              e.stopPropagation();
                console.log(val);
                  handleClickSingleRoute(
                    val,
                    element.features[0].properties.id)
            });
            new mapboxgl.Marker(el)
            .setLngLat([val.long, val.lat])
            .addTo(map);
          })
        });
      }

      function getInstructions(data) {
        const steps = data.legs[0].steps;
        const instructions = document.getElementById("instructions");
        instructions.classList.add("instructions")
        let tripInstructions = "";
        // Output the instructions for each step of each leg in the response object
        for (const step of steps) {
            tripInstructions += `<li>${step.maneuver.instruction}</li>`;
          }
        instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
        )} min.</strong></p><ol>${tripInstructions}</ol>`;
      }

      // Draw the Map Matching route as a new layer on the map
      function addRoute(coords, color) {
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
              "line-color": color,
              "line-width": 8,
              "line-opacity": 0.8,
            },
          });
        }
      }

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
    }
  }, [mapState, singleRouteState, pinStorage, props.rotas]); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div>
      {/* adionar o drawer assim que um ponto e criado */}
      {
      mapState === true && StorageStatus >= 1 && ModalFinalizarRota=== false && ModalRotaTerminada === false ? 
        <Drawertest />
       : ""}

      {/* permitir ao utilizador acabar a rota quando tem 2 ou mais pontos */}
      {StorageStatus >= 2 ? (
        ModalFinalizarRota ||
        ManageModalState ||
        ModalPinState ||
        ModalCancelarState ||
        ModalRotaTerminada ? (
          ""
        ) : (
          <button
            className="botaoCompletarMain"
            onClick={() => {
              dispatch(openModalConfirmarRota());
            }}
          >
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.4875 21.6852L0 12.1977L2.71017 9.4875L9.49038 16.26L9.4875 16.2629L25.7504 0L28.4606 2.71017L12.1977 18.975L9.48942 21.6833L9.4875 21.6852Z"
                fill="white"
              />
            </svg>
          </button>
        )
      ) : (
        ""
      )}
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      />

      <ModalPin data={coordenadas} />
      {clickedSingleRoute !== undefined && props.rotas !== undefined ? (
      <ModalPontoInfo info={clickedSingleRoute} rotas={props.rotas}/>
      ) : (
        ''
      )}

      <ManageModalPin clicked={clickedData} />

      {/* load modal when categorias get information */}
      {props.categorias !== undefined ? (
      <ModalConfirmarRota categorias={props.categorias} />
      ):  (
        ''
      )}

      {/* load modal when theres clicked information */}
      {clickedMain !== undefined ? (
        <ModalRota clicked={clickedMain} />
      ) : (
        ''
      )}

    </div>
  );
};

export default Map;
