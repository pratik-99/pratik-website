import React from 'react'
import "./menu.scss"
export default function Menu({menuOpen, setMenuOpen}) {
    const func=()=>setMenuOpen(false);
    return (
        <div className={"menu "+(menuOpen && "active")} >
            <ul>
                <li onClick={func}>
                    <a href="#intro" >Intro</a>
                </li>
                <li onClick={func}>
                    <a href="#portfolio">About</a>
                </li>
                <li onClick={func}>
                    <a href="#project">Projects</a>
                </li>
                {/* <li onClick={func}>
                    <a href="#works">Work</a>
                </li> */}
                <li onClick={func}>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
            
        </div>
    )
}
