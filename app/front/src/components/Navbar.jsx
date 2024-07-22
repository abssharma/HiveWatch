import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className = "header">
            <NavLink to = "/" className = "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md p-9">
                <p className = "blue-gradient_text">BEE BOYZ</p>
            </NavLink>
            <nav className = "flex text-lg gap-7 font-medium">
                <NavLink to = "/about" className = {({ isActive }) => isActive ? 
                'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to = "/upload" className = {({ isActive }) => isActive ? 
                'text-blue-500' : 'text-black'}>
                    Upload
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar