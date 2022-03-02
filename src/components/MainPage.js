import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { route_styles } from "../style/route_styles";
import { Link, useLocation } from "react-router-dom";
import Rotas from "../components/data/routes.json";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Modal from "react-modal";
import Nav from "./nav";

Modal.setAppElement("#root");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

const SecondPage = () => {
  const pinId = useLocation();
  if (pinId.state != null) {
    const { id } = pinId.state; // id da rota que vem do profile
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.getElementById("menu_bar").style.display = "none";
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    document.getElementById("menu_bar").style.display = "flex";
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    },
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [Rotas[0].pins[0].long, Rotas[0].pins[0].lat],
        },
        properties: {
          title: Rotas[0].name,
          description: Rotas[0].desc,
        },
      },
    ],
  };

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-8.654);
  const [lat, setLat] = useState(40.63);
  const [zoom, setZoom] = useState(16);
  const [pitch, setPitch] = useState(0);
  const [bearing, setBearing] = useState(0);

  async function teste() {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/-8.65599354837289,40.63363090756229;-8.653213663330945,40.637160643840645;-8.655121427575523,40.64031794511777?geometries=geojson&access_token=${mapboxgl.accessToken}`,

      { method: "GET" }
    );
    console.log(query);
  }

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

    getRotas();

    getMatch(
      "-8.65599354837289,40.63363090756229;-8.646306792590423,40.624402272740326;-8.655121427575523,40.64031794511777",
      [50, 50, 50],
      "walking"
    );

    teste();

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    const draw = new MapboxDraw({
      // Instead of showing all the draw tools, show only the line string and delete tools.
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true,
      },
      // Set the draw mode to draw LineStrings by default.
      defaultMode: "draw_line_string",
      styles: route_styles,
    });

    // Add the draw tool to the map.
    map.addControl(draw);

    // Add create, update, or delete actions
    map.on("draw.create", updateRoute);
    map.on("draw.update", updateRoute);
    map.on("draw.delete", removeRoute);

    // Use the coordinates you just drew to make the Map Matching API request
    function updateRoute() {
      removeRoute(); // Overwrite any existing layers

      const profile = "walking"; // Set the profile

      // Get the coordinates
      const data = draw.getAll();
      const lastFeature = data.features.length - 1;
      const coords = data.features[lastFeature].geometry.coordinates;
      // Format the coordinates
      const newCoords = coords.join(";");
      openModal();
      // Set the radius for each coordinate pair to 25 meters
      const radius = coords.map(() => 50);
      getMatch(newCoords, radius, profile);
    }

    function getRotas() {
      const profile = "walking"; // Set the profile

      const coords = [
        [Rotas[0].pins[0].long, Rotas[0].pins[0].lat],
        [Rotas[0].pins[1].long, Rotas[0].pins[1].lat],
        [Rotas[0].pins[2].long, Rotas[0].pins[2].lat],
      ];

      const newCoords = coords.join(";");

      const radius = coords.map(() => 50);
      getMatch(newCoords, radius, profile);
    }

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

    // Add the geocoder to the map
    map.addControl(geocoder);

    // var directions = new MapboxDirections({
    //   accessToken: mapboxgl.accessToken,
    //   unit: "metric",
    //   profile: "mapbox/walking",
    //   language: "pt-PT",
    //   interactive: false,
    // });

    // // add to your mapboxgl map
    // map.addControl(directions, "top-left");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geo Location not supported by browser");
      }
    }

    function showPosition(position) {
      var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
      geojson.features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [location.longitude, location.latitude],
        },
      });
    }

    getLocation();

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
            "line-color": "#03AA46",
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
    map.on("load", () => {
      userLocation.trigger();
    });

    // If the user clicks the delete draw button, remove the layer if it exists
    function removeRoute() {
      if (!map.getSource("route")) return;
      map.removeLayer("route");
      map.removeSource("route");
    }

    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);
    }

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div
        id="menu_bar"
        style={{
          position: "fixed",
          zIndex: "1",
          bottom: "0",
          width: "100vw",
          padding: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
        }}
      >
        <Nav />
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Título da Rota</h2>
          <input type="text"></input>
          <div>Primeiro Ponto de Interesse</div>
          <input type="text"></input>
          <div>Segundo Ponto de Interesse</div>
          <input type="text"></input>
          <div>
            <button onClick={closeModal}>close</button>
          </div>
        </Modal>
      </div>
      {/* <div class="info-box">
        <div id="directions"></div>
      </div> */}
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default SecondPage;
