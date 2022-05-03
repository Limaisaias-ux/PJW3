import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        Menu: <Link to="/">Home</Link> 
        <NavLink style={{margin: '0 0 0 10px'}} to="images">Images</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="api-integration">Api Integration</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="props">Props</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="children">Children</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="images/icon">Icon</NavLink> 
    </div>

  )
}

export default Menu