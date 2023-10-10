import React from 'react'
import "./portfolio.scss"
import img1 from '../assets/pratik.jpg';

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="left">

                <div className="imgcontainer">
                    <img src={img1} alt="pratik" />
                </div>

            </div>


            <div className="right">
                <div className="header"><h1>About Me</h1></div>

                <div className="textcontainer">
                    <p>Hello there, I'm Pratik Poojary.
                       I have completed my Graduation in Bachelors of Engineering in Electronics and Telecommunication from University of Mumbai.
                       I have an experience of 2 years working as a Software Engineer at Wonderbiz technologies. Currently I'm learning React and C#. 
                       Apart from this I enjoy playing chess in my free time. </p>
                </div>
            </div>
            
        </div>
    )
}
