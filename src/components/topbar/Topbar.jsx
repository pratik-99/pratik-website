import React from 'react'
import "./topbar.scss"
import { AccountCircle } from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#portfolio" className="logo"><AccountCircle/></a>
                    {/* <div className="itemcontainer">
                        <Person className="icon"/>
                        <a href="http://wa.me/919167439226">+91 9167439226</a>
                    </div>
                    <div className="itemcontainer">
                        <Mail className="icon"/>
                        <a href="mailto:ppoojary393@gmail.com">ppoojary393@gmail.com</a>
                    </div>
                    <div className="itemcontainer">
                        <LinkedIn className="icon"/>
                        <a href="https://www.linkedin.com/in/pratik-poojary-8a30421b7/">Linkedin</a>
                    </div>
                    <div className="itemcontainer">
                        <GitHub className="icon"/>
                        <a href="https://github.com/pratik-99/">Github</a>
                    </div>
                    <div className="itemcontainer">
                        <Instagram className="icon"/>
                        <a href="https://www.instagram.com/pratik.poojary/">Instagram</a>
                    </div>
                    <div className="itemcontainer">
                        <Facebook className="icon"/>
                        <a href="https://www.facebook.com/pratik.poojary.31/">Facebook</a>
                    </div> */}
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"> </span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
