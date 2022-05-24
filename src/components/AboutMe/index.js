import React from "react";
import './AboutMe.css';


function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>


            <div class="columnLeft">
                <img src={process.env.PUBLIC_URL + '/Diane.jpeg'} alt="Diane_Pic"></img>
            </div>
            <div class="columnRight">Lala la all about Diane</div>


        </div>


    );
}

export default AboutMe;