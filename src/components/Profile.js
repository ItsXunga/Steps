import React, { useState } from "react"
import Slider from "react-slick"
import "../style/Profile.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import { ProfileBG } from "../assets/img/profile/profile-bg"
import Rotas from "../components/data/routes.json"
import { PinColor } from "../assets/img/profile/pin"

const Profile = () => {
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
          title: value.name,
          description: value.desc,
        },
      },
    ],
  }))

  console.log(geojson)

  const [selectedTabArray, setSelectedTabArray] = useState(
    Rotas.filter(function (value) {
      return value.creator === "John Lee"
    })
  )
  const [favSelected, setFavSelected] = useState(false)
  const settings = {
    dots: true,
    speed: 800,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    infinite: false,
  }

  const changeFav = () => {
    setSelectedTabArray(
      Rotas.filter(function (value) {
        return value.creator !== "John Lee"
      })
    )
    setFavSelected(true)
  }

  const changeOwn = () => {
    setSelectedTabArray(
      Rotas.filter(function (value) {
        return value.creator === "John Lee"
      })
    )
    setFavSelected(false)
  }

  const CheckPin = (start, end, name) => {
    if (start === true && end === false) {
      return (
        <div
          style={{
            marginLeft: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#5F61F3" />
          <p>{name}</p>
        </div>
      )
    } else if (start === false && end === false) {
      return (
        <div
          style={{
            marginLeft: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#8283F5" />
          <p>{name}</p>
        </div>
      )
    } else {
      return (
        <div
          style={{
            marginLeft: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PinColor color="#A5A6F6" />
          <p>{name}</p>
        </div>
      )
    }
  }

  return (
    <section className="profileMain">
      <div className="backArrowProfile">
        <Link to={"/main"}>
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
              <h1>John Lee</h1>
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
            <p>Engenheiro Software</p>
          </div>
        </div>
      </div>

      <div style={{ height: "60vh", zIndex: 1 }}>
        <div className="buttonPlacement">
          <button
            onClick={() => changeOwn()}
            className={favSelected === true ? "defaultTab" : "selectedTab"}
          >
            <svg
              style={{ marginRight: ".5rem" }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.67185 0.0317265C8.15993 0.249578 6.93158 1.44334 6.63747 2.98068C6.53183 3.53293 6.59828 4.34017 6.79164 4.85386C6.98293 5.36201 7.02564 5.42693 8.30228 7.14873C8.84056 7.87474 9.28096 8.47629 9.28096 8.48549C9.28096 8.49471 8.41198 8.5025 7.34993 8.50278C5.26026 8.50337 5.17683 8.50903 4.81527 8.67454C4.2091 8.95205 3.81048 9.57365 3.80888 10.244C3.80713 10.9809 4.25594 11.6019 5.01015 11.9061C5.12561 11.9527 5.5697 11.959 9.7813 11.9731C14.4082 11.9887 14.4256 11.989 14.5662 12.054C14.7366 12.1329 14.8884 12.2792 14.9807 12.4536C15.0773 12.636 15.0773 12.9987 14.9808 13.181C14.8923 13.3481 14.6652 13.5469 14.5094 13.5936C14.4174 13.6212 13.0508 13.6304 9.05442 13.6304H3.72223L3.65356 13.4468C3.4396 12.8747 2.91161 12.4139 2.30737 12.272C1.09303 11.9866 -0.0728375 12.977 0.00355917 14.229C0.0617245 15.1824 0.817779 15.9384 1.77128 15.9965C2.58782 16.0464 3.35716 15.5531 3.64439 14.7955L3.73023 14.5691L9.13079 14.5688L14.5314 14.5685L14.7778 14.4906C15.4494 14.2785 15.9337 13.6673 15.9939 12.9556C16.063 12.1396 15.5408 11.3813 14.7222 11.1088C14.5596 11.0547 14.2993 11.0507 9.92202 11.0355L5.29382 11.0194L5.14634 10.9327C4.8188 10.7402 4.67317 10.3649 4.78334 9.99713C4.8299 9.84172 5.02838 9.61465 5.196 9.525L5.32509 9.45595L7.84799 9.44032C10.3514 9.42481 10.3716 9.42419 10.4592 9.3589C10.5312 9.30524 12.7518 6.29274 13.1935 5.6495C13.9341 4.57097 14.0131 3.14447 13.3982 1.95249C13.0553 1.28759 12.4536 0.691473 11.7901 0.359395C11.2054 0.0666853 10.3488 -0.0658332 9.67185 0.0317265ZM10.671 0.982651C11.2412 1.08206 11.7296 1.34659 12.1304 1.77304C12.8973 2.58895 13.0923 3.7893 12.6163 4.76427C12.5174 4.96693 12.1625 5.48103 11.3634 6.5792C10.7503 7.4219 10.237 8.11539 10.2228 8.12026C10.2001 8.12811 8.24364 5.51695 7.97211 5.1164C7.4393 4.33042 7.37248 3.31886 7.7958 2.44689C8.32586 1.35494 9.46865 0.772961 10.671 0.982651ZM9.98457 2.19161C9.56593 2.24645 9.11224 2.5826 8.92624 2.97574C8.59905 3.66729 8.89153 4.49192 9.58564 4.83494C9.79906 4.94038 9.84991 4.95248 10.1267 4.96361C10.38 4.97378 10.4674 4.96415 10.6384 4.90727C11.7443 4.53926 11.9362 3.03187 10.9576 2.39949C10.6657 2.21081 10.351 2.14358 9.98457 2.19161ZM10.438 3.18472C10.7157 3.37808 10.7295 3.72883 10.468 3.94887C10.3899 4.01457 10.338 4.03076 10.2057 4.03076C9.98845 4.03076 9.85094 3.93983 9.76892 3.74196C9.71632 3.61504 9.71322 3.57843 9.74584 3.46951C9.79625 3.30135 9.89554 3.19303 10.0471 3.14094C10.1908 3.0915 10.3258 3.10664 10.438 3.18472ZM2.28126 13.2473C2.46455 13.3284 2.65008 13.5128 2.74759 13.711C2.80863 13.835 2.82336 13.9136 2.82336 14.1151C2.82336 14.4098 2.75284 14.5847 2.55386 14.7836C2.35488 14.9826 2.17994 15.0531 1.88521 15.0531C1.59047 15.0531 1.41554 14.9826 1.21656 14.7836C0.713395 14.2806 0.920976 13.4265 1.60051 13.2038C1.7741 13.1469 2.10167 13.1678 2.28126 13.2473Z"
                fill={favSelected === true ? "#393C6A" : "white"}
              />
            </svg>
            As tuas rotas
          </button>

          <button
            onClick={() => changeFav()}
            className={favSelected === true ? "selectedTab" : "defaultTab"}
          >
            <svg
              style={{ marginRight: ".5rem" }}
              width="16"
              height="16"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.35727e-08 4.2005C-0.000198747 3.07305 0.465908 1.99286 1.29345 1.20297C2.12099 0.413084 3.24047 -0.0201577 4.4 0.000721143C5.77386 -0.00637183 7.08479 0.56005 8 1.5562C8.91521 0.56005 10.2261 -0.00637183 11.6 0.000721143C12.7595 -0.0201577 13.879 0.413084 14.7065 1.20297C15.5341 1.99286 16.0002 3.07305 16 4.2005C16 8.36607 10.8968 11.5112 8 14C5.1096 11.4902 6.35727e-08 8.36918 6.35727e-08 4.2005Z"
                fill={favSelected === true ? "white" : "#393C6A"}
              />
            </svg>
            Favoritos
          </button>
        </div>

        <Slider {...settings}>
          {selectedTabArray.map((props) => (
            <div className="profileCard" key={props.id} id="main">
              <section className="cardButton">
                <h3>{props.category}</h3>
                <section>
                  <button
                    className="profileButton"
                    style={{ marginRight: "0.6rem" }}
                  >
                    <svg
                      style={{ display: "flex", margin: "auto" }}
                      width="16"
                      height="15"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.76225 12.0044C2.58693 12.0041 2.41979 11.9351 2.30163 11.8142C2.18128 11.6943 2.12148 11.5322 2.13725 11.3686L2.29038 9.79705L9.36413 3.19722L11.5748 5.25988L4.50288 11.8591L2.81913 12.0021C2.79975 12.0038 2.78038 12.0044 2.76225 12.0044ZM12.016 4.84747L9.806 2.7848L11.1316 1.54755C11.2489 1.43801 11.4079 1.37646 11.5738 1.37646C11.7397 1.37646 11.8988 1.43801 12.016 1.54755L13.3416 2.7848C13.459 2.89421 13.5249 3.04269 13.5249 3.19751C13.5249 3.35233 13.459 3.5008 13.3416 3.61022L12.0166 4.84688L12.016 4.84747Z"
                        fill="#393C6A"
                      />
                    </svg>
                  </button>

                  <button className="profileButton">
                    <svg
                      style={{ display: "flex", margin: "auto" }}
                      width="16"
                      height="15"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.625 11.8334H3.375C2.68464 11.8334 2.125 11.3111 2.125 10.6667V3.08341H0.875V1.91675H3.375V1.33341C3.375 0.689083 3.93464 0.166748 4.625 0.166748H8.375C9.06536 0.166748 9.625 0.689083 9.625 1.33341V1.91675H12.125V3.08341H10.875V10.6667C10.875 11.3111 10.3154 11.8334 9.625 11.8334ZM3.375 3.08341V10.6667H9.625V3.08341H3.375ZM4.625 1.33341V1.91675H8.375V1.33341H4.625ZM8.375 9.50008H7.125V4.25008H8.375V9.50008ZM5.875 9.50008H4.625V4.25008H5.875V9.50008Z"
                        fill="#393C6A"
                      />
                    </svg>
                  </button>
                </section>
              </section>

              <section style={{ margin: "0rem .5rem 0rem .5rem" }}>
                <h2 style={{ fontSize: "18px", fontFamily: "ManropeBold" }}>
                  {props.name}
                </h2>
                <p style={{ marginTop: ".5rem" }}>{props.desc}</p>
              </section>
              <section
                style={{ margin: "0rem .5rem 0rem .5rem", height: "13vh" }}
              >
                {props.pins.map((pin) => (
                  <>{CheckPin(pin.start, pin.end, pin.pinName)}</>
                ))}
              </section>

              <section className="sideButton">
                <Link to={"/main"} state={{ id: props.id }}>
                  <button className="goButton">
                    <svg
                      style={{ display: "flex", margin: "auto" }}
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.21745 10.9793L0.296229 9.05811L6.31881 3.03553L1.31246 3.0659L1.33431 0.335123L11.0179 0.257654L10.9404 9.94125L8.20966 9.9631L8.24003 4.95675L2.21745 10.9793Z"
                        fill="#393C6A"
                      />
                    </svg>
                  </button>
                </Link>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Profile
