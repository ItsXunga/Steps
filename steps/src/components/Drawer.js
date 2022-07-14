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
      <button onClick={toggleDrawer}>Show</button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="drawerstyle"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  )
}

export default Drawertest
