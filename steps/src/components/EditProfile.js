import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/editProfile.css";
import axios from "axios";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const EditProfile = () => {
  const retrievedObject = AuthService.getCurrentUser();
  const currentUser = JSON.parse(retrievedObject).user._id;

  const [user, setUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("EditInput");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://steps-ua.herokuapp.com/users/${currentUser}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const handleOnClick = useCallback(
    () => navigate("/main", { replace: true }),
    [navigate]
  );

  function updateName() {
    axios
      .put(
        `https://steps-ua.herokuapp.com/users/updateName/${currentUser}`,
        {
          name: name,
        },
        { headers: authHeader }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  function updatePassword() {
    axios
      .put(
        `https://steps-ua.herokuapp.com/users/updatePassword/${currentUser}`,
        {
          password: password,
        },
        { headers: authHeader }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [cPassword]);

  function updateData() {
    if (name !== "") {
      updateName();
    }
    if (password !== "") {
      updatePassword();
    }
    handleOnClick();
  }

  // function updateAvatar() {
  //   axios
  //     .put(`https://steps-ua.herokuapp.com/users/updateAvatar/${currentUser}`, {
  //       avatar: "Hello.jpg",
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div className="editDiv">
      <div>
        <div className="backarrow">
          <Link to={"/profile"}>
            <svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z"
                fill="#393C6A"
              />
            </svg>
          </Link>
        </div>
        <h1 style={{ textAlign: "center", fontSize: "24px" }}>Editar perfil</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*TODO user.avatar  */}
        <img
          style={{ height: "18vh", width: "auto" }}
          src={require("../assets/img/editProfile/avatar.png")}
          alt="avatar"
        />
      </div>
      <form onSubmit={updateData}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            height: "45vh",
          }}
        >
          <div>
            <label className="EditLabel" for="username">
              Username
            </label>
            <input
              className="EditInput"
              type="text"
              id="username"
              placeholder={user.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="EditLabel" for="password">
              Nova Password
            </label>
            <input
              className="EditInput"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="EditLabel" for="confirmPassword">
              Confirme Password
            </label>
            <input
              className="EditInput"
              type="password"
              id="confirmPassword"
              value={cPassword}
              onChange={handleCPassword}
            />
          </div>
          {showErrorMessage && isCPasswordDirty ? (
            <div> Passwords did not match </div>
          ) : (
            ""
          )}
        </div>
        <div style={{ padding: "0rem 3rem" }}>
          <button
            className="orangeButton"
            style={{ marginLeft: "1rem" }}
            type="submit"
          >
            Alterar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
