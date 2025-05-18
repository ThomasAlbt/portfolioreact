import { Cross as Hamburger } from 'hamburger-react';
import { NavLink } from "react-router";
import { useState } from "react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    if (isOpen) {

    }
    
    return (
        <>
            <header>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                <nav className={isOpen ? "open" : "hidden"}>
                    <NavLink onClick={() => setOpen(false)} to="/">Acceuil</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/About">A propos</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/Project">Projets</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/Formations">Formations</NavLink>
                </nav>
                <h1>TA</h1>
            </header>
        </>
    )
}

export default Header;