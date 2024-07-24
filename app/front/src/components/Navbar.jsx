import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className = "header">
            <NavLink to = "/" className = "w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md p-3">
                <p>🐝</p>
            </NavLink>
            <nav className = "flex text-lg gap-7 font-medium">
                <NavLink to = "/fact" className = "w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md p-3">
                    <p>💡</p>
                </NavLink>
                <NavLink to = "/about" className = "w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md p-3">
                    <p>❔</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
