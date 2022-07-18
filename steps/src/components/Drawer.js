import React from "react"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import "../style/drawer_styles.css"

const Drawertest = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="drawerstyle"
      >
        <div onClick={toggleDrawer} className="uparrow">
          <svg
            width="60"
            height="4"
            viewBox="0 0 60 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="4" rx="2" fill="#E3E4E5" />
          </svg>
        </div>

        {/* pontos*/}
        <ul className="ul">
          <div className="pincard">
            <div style={{ display: "grid" }}>
              <h1
                style={{
                  lineHeight: "1.5rem",
                  alignSelf: "center",
                  padding: "5px 0",
                  fontSize: "20px",
                  fontFamily: "manropeBold",
                }}
              >
                Taberna do Zé
              </h1>
              <p
                style={{
                  alignSelf: "center",
                  fontSize: "13px",
                  padding: "10px 0",
                }}
              >
                descrição descrição descrição descrição descrição descrição
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button className="buttonx">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4527 0.875L9.99935 8.56125L2.54602 0.875L0.666016 2.81375L8.11935 10.5L0.666016 18.1863L2.54602 20.125L9.99935 12.4387L17.4527 20.125L19.3327 18.1863L11.8793 10.5L19.3327 2.81375L17.4527 0.875Z"
                    fill="#393C6A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ul>
      </Drawer>
    </>
  )
}

export default Drawertest
