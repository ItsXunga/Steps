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
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.3814 15.0271C26.9178 14.6648 27.158 13.9635 26.9161 13.4657C26.7979 13.2224 14.3877 0.359736 14.1385 0.222086C14.0251 0.159482 13.7911 0.107179 13.6183 0.105821C13.4455 0.104464 13.2107 0.153083 13.0963 0.213898C12.8449 0.347613 0.234125 13.0137 0.112145 13.2551C-0.137575 13.749 0.091612 14.454 0.622295 14.8247C0.905204 15.0224 1.43605 15.0705 1.72457 14.9248C1.81697 14.8781 4.52552 12.2015 7.74362 8.97674L13.5946 3.11357L19.3528 9.06796C22.5198 12.3429 25.186 15.0617 25.2777 15.1098C25.5638 15.2601 26.0954 15.2203 26.3814 15.0271Z"
              fill="#393C6A"
            />
          </svg>
        </div>
        <div className="divpoints">
          <div className="point">hello</div>
          <div className="point">hello</div>
          <div className="point">hello</div>
          <div className="point">hello</div>
          <div className="point">hello</div>
        </div>
      </Drawer>
    </>
  )
}

export default Drawertest
