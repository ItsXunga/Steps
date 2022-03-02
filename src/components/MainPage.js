import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { route_styles } from "../style/route_styles";
import { Link } from "react-router-dom";
import menu_settings from "../assets/img/menu_settings.svg";
import menu_categorias from "../assets/img/menu_categorias.svg";
import menu_add_route from "../assets/img/menu_add_route.svg";
import menu_perfil from "../assets/img/menu_perfil.svg";
import menu_avatar from "../assets/img/menu_avatar.svg";
import search_icon from "../assets/img/search_icon.svg";
import menuClosed from "../assets/img/menu/hamburguerClosed.svg";
import menuOpened from "../assets/img/menu/hamburguerOpened.svg";
import Rotas from "../components/data/routes.json";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

const SecondPage = () => {
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
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [Rotas[1].pins[0].long, Rotas[1].pins[0].lat],
        },
        properties: {
          title: Rotas[1].name,
          description: Rotas[1].desc,
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

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/stepsua/ckzso6k1f001114ngcorbs021",
      center: [lng, lat],
      pitch: pitch, // pitch in degrees
      bearing: bearing, // bearing in degrees
      zoom: zoom,
      attributionControl: false,
    });

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
      console.log(coords, "here");
      // Format the coordinates
      const newCoords = coords.join(";");
      // Set the radius for each coordinate pair to 25 meters
      const radius = coords.map(() => 50);
      getMatch(newCoords, radius, profile);
    }

    // Make a Map Matching request
    async function getMatch(coordinates, radius, profile) {
      // Separate the radiuses with semicolons
      const radiuses = radius.join(";");
      // Create the query
      const query = await fetch(
        `https://api.mapbox.com/matching/v5/mapbox/${profile}/${coordinates}?geometries=geojson&radiuses=${radiuses}&steps=true&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const response = await query.json();
      // Handle errors
      if (response.code !== "Ok") {
        alert(
          `${response.code} - ${response.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
        );
        return;
      }
      const coords = response.matchings[0].geometry;
      // Draw the route on the map
      addRoute(coords);
      // getInstructions(response.matchings[0]);
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

    // function getInstructions(data) {
    //   // Target the sidebar to add the instructions
    //   const directions = document.getElementById("directions");
    //   let tripDirections = "";
    //   // Output the instructions for each step of each leg in the response object
    //   for (const leg of data.legs) {
    //     const steps = leg.steps;
    //     for (const step of steps) {
    //       tripDirections += `<li>${step.maneuver.instruction}</li>`;
    //     }
    //   }
    //   directions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
    //     data.duration / 60
    //   )} min.</strong></p><ol>${tripDirections}</ol>`;
    // }

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
      {/* <div
        style={{
          position: "fixed",
          zIndex: "1",
          textAlign: "center",
          top: "2.5vh",
          verticalAlign: "middle",
          width: "100vw",
        }}
      >
        <input
          style={{
            width: "80%",
            height: "5vh",
            borderRadius: "40vw",
            border: "2px solid #FFFFFF",
            backgroundColor: "#FFFFFF",
            opacity: "60%",
            fontFamily: "ManropeRegular",
            fontSize: "19px",
            color: "#393C6A",
            backgroundImage: `url(${search_icon})`,
            backgroundPosition: "95% 50%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div> */}
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          textAlign: "center",
          bottom: "0",
          width: "100vw",
          padding: '1rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          
        }}
      >
        
        <Link to="/">
          <img style={{margin: '0rem .2rem'}} id="menu2" src={menu_categorias} />
        </Link>
        <Link to="/">
          <img style={{margin: '0rem .2rem'}} id="menu3" src={menu_add_route} />
        </Link>
        <Link to="/">
          <img style={{margin: '0rem .2rem'}} id="menu4" src={menu_perfil} />
        </Link>
        <img /*onClick={() => setMenu(!menu)}*/style={{margin: '0rem .2rem'}}  src={menuOpened} />
      </div>
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default SecondPage;
