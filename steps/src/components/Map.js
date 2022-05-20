import React, { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import mapboxgl from "mapbox-gl";
import { Link, useLocation } from "react-router-dom";
import Rotas from "../components/data/routes.json";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Modal from "react-modal";
import { modalStyles } from "../style/modal_styles";
import ModalAddRota from "./ModalAddRota";


Modal.setAppElement("#root");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

const Map = () => {

  const { mapState } = useSelector((state) => state.mapState)
  const { singleRouteState } = useSelector((state) => state.singleRouteState)
  
  const coords = [];

  const pinId = useLocation();
  if (pinId.state !== null) {
    const { id } = pinId.state; // id da rota que vem do profile
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.getElementById("menu_bar").style.display = "none";
  }

  function closeModal() {
    setIsOpen(false);
    document.getElementById("menu_bar").style.display = "flex";
  }

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

      var marker = new mapboxgl.Marker({'color': '#F69E7C'});

      map.on('click', (e) => {
          var coordinates = e.lngLat;
          marker.setLngLat(coordinates).addTo(map);
          setTimeout(() => {
            setIsOpen(true);
          }, "500")
                                                                           
      })


    } else {
      // Make a Map Matching request
      async function getMatch(coordinates, radius, profile) {
        // Separate the radiuses with semicolons
        const radiuses = radius.join(";");
        // Create the query
        const query = await fetch(
          `https://api.mapbox.com/matching/v5/mapbox/${profile}/${coordinates}?geometries=geojson&radiuses=${radiuses}&steps=true&language=pt&access_token=${mapboxgl.accessToken}`,
          { method: "GET" }
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

        coords.splice(0, coords.length);
      }

      // Add the geocoder to the map
      map.addControl(geocoder);

      if (pinId.state === null) {
        geojson.map((element) => (
          <div className="marker">
            {new mapboxgl.Marker({'color': '#F69E7C'})
              .setLngLat(element.features[0].geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25, closeButton: false }) // add popups
                  .setHTML(
                    `<div class="modalRota">
                      <h2 style="padding: .5rem">${element.features[0].properties.title}</h2>
                      <div>
                      <p style="padding: .5rem">${element.features[0].properties.description}</p>
                      <p> <span style="font-family: ManropeBold">Categoria:</span> ${element.features[0].properties.category}</p>
                      <p><span style="font-family: ManropeBold">Criador:</span> ${element.features[0].properties.creator}</p>
                      </div>
                    </div>
                  `
                  )
                  .on("open", () => {
                    getRotas(element.features[0].properties.id);
                  })
              )
              .addTo(map)}
          </div>
        ));
      } else if (pinId.state != null) {
        map.removeControl(geocoder);

        const { id } = pinId.state;

        const routeFromProfile = Rotas.filter(function (value) {
          return value.id === id;
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

        geojson2.map((element) => (
          <div className="marker">
            {new mapboxgl.Marker({'color': '#F69E7C'})
              .setLngLat(element.features[0].geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25, closeButton: false }) // add popups
                  .setHTML(
                    `<div class="modalRota">
                      <h2 style="padding: .5rem">${element.features[0].properties.title}</h2>
                      <div>
                      <p style="padding: .5rem">${element.features[0].properties.description}</p>
                      <p> <span style="font-family: ManropeBold">Categoria:</span> ${element.features[0].properties.category}</p>
                      <p><span style="font-family: ManropeBold">Criador:</span> ${element.features[0].properties.creator}</p>
                      </div>
                    </div>
                  `
                  )
                  .on("open", () => {
                    getRotas(element.features[0].properties.id);
                  })
              )
              .addTo(map)}
          </div>
        ));
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
      if (pinId.state === null) {
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
  }, [mapState, singleRouteState]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <img src={require("../assets/img/pin.png")} alt="pin" />
              <p
                style={{
                  padding: "2rem 2rem",
                  fontSize: "18px",
                  fontFamily: "ManropeRegular",
                }}
              >
                A tua rota foi adicionada com sucesso!
              </p>
              <div style={{ padding: "0.5rem 1rem" }}>
                <button onClick={closeModal} className="orangeButton">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default Map;
