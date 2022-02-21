import mapboxgl from "mapbox-gl";
import { theme } from "../assets/gradient";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menu_settings from "../assets/img/menu_settings.svg";
import menu_categorias from "../assets/img/menu_categorias.svg";
import menu_add_route from "../assets/img/menu_add_route.svg";
import menu_perfil from "../assets/img/menu_perfil.svg";
import menu_avatar from "../assets/img/menu_avatar.svg";
import search_icon from "../assets/img/search_icon.svg";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcHN1YSIsImEiOiJja3pzb2xveTYwOWNwMndsNjhxbTl1cTM5In0.oTjFtfdjrGxlwLDxaPgHNw";

function MainPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-8.654);
  const [lat, setLat] = useState(40.63);
  const [zoom, setZoom] = useState(16);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    // handleMenu();
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/stepsua/ckzso6k1f001114ngcorbs021",
      center: [lng, lat],
      pitch: 50, // pitch in degrees
      bearing: -0, // bearing in degrees
      zoom: zoom,
      attributionControl: false,
    });
  });

  return (
    <div style={theme}>
      <div
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
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          textAlign: "center",
          bottom: "2.5vh",
          verticalAlign: "middle",
          width: "100vw",
        }}
      >
        <Link to="/">
          <img id="menu1" src={menu_settings}></img>
        </Link>
        <Link to="/">
          <img id="menu2" src={menu_categorias}></img>
        </Link>
        <Link to="/">
          <img id="menu3" src={menu_add_route}></img>
        </Link>
        <Link to="/">
          <img id="menu4" src={menu_perfil}></img>
        </Link>
        <img /*onClick={() => setMenu(!menu)}*/ src={menu_avatar}></img>
      </div>
      <div
        ref={mapContainer}
        style={{ height: "100vh" }}
        className="map-container"
      />
    </div>
  );
}

export default MainPage;
