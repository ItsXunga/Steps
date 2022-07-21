import React from "react";
import { Link } from "react-router-dom";
import { ProfileBG } from "../assets/img/profile/profile-bg";

function ProfileHeader(props) {

  return (
    <div>
      <ProfileBG />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <img
            style={{ height: "15vh", width: "auto", zIndex: 1 }}
            src={require("../assets/img/profile/avatar.png")}
            alt="avatar"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: ".5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <h1>{props.user.name}</h1>
            <Link to={"/editProfile"}>
              <div style={{ display: "flex" }}>
                <img
                  style={{ paddingLeft: ".5rem", zIndex: 1 }}
                  src={require("../assets/img/profile/profileSettings.png")}
                  alt="profile settings"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
