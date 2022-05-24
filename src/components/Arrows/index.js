import React from "react";
import './Arrows.css';

function Arrows() {
    return (
        <div>
            <div id="arrows">
                <span id="arrow-left" class="fa-layers fa-fw" href="/AboutMe">
                    <i id="arrow-text" class="fa-solid ">About Me</i>
                    <i id="left-down-arrow" class="fa-solid fa-arrow-down"></i>
                </span>

                <span id="arrow-right" class="fa-layers fa-fw" href="/Projects">
                    <i id="arrow-text" class="fa-solid ">Portfolio</i>
                    <i id="right-down-arrow" class="fa-solid fa-arrow-down"></i>
                </span>
            </div>

        </div>


    );
}

export default Arrows;