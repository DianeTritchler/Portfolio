import React from "react";
import './Arrows.css';

function Arrows() {

    console.log(window.location.pathname)

    function handleClick(event) {
        console.log(event);
        window.location.href = event.target.title;
    }

    if (window.location.pathname === '/Home') {
        return (
            <div id="arrows">
                <span id="arrow-left" class="fa-layers fa-fw" title="/AboutMe" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/AboutMe">About Me</i>
                    <i id="left-down-arrow" class="fa-solid fa-arrow-down" title="/AboutMe"></i>
                </span>

                <span id="arrow-right" class="fa-layers fa-fw" title="/Projects" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/Projects">Portfolio</i>
                    <i id="right-down-arrow" class="fa-solid fa-arrow-down" title="/Projects"></i>
                </span>
            </div>
        )
    } else if (window.location.pathname === '/AboutMe') {
        return (
            <div id="arrows">
                <span id="arrow-left" class="fa-layers fa-fw" title="/Home" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/Home">Home Page</i>
                    <i id="left-down-arrow" class="fa-solid fa-arrow-down" title="/Home"></i>
                </span>

                <span id="arrow-right" class="fa-layers fa-fw" title="/Projects" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/Projects">Portfolio</i>
                    <i id="right-down-arrow" class="fa-solid fa-arrow-down" title="/Projects"></i>
                </span>
            </div>
        )
    } else if (window.location.pathname === '/Projects') {
        return (
            <div id="arrows">
                <span id="arrow-left" class="fa-layers fa-fw" title="/Home" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/Home">Home Page</i>
                    <i id="left-down-arrow" class="fa-solid fa-arrow-down" title="/Home"></i>
                </span>

                <span id="arrow-right" class="fa-layers fa-fw" title="/AboutMe" onClick={handleClick}>
                    <i id="arrow-text" class="fa-solid " title="/AboutMe">AboutMe</i>
                    <i id="right-down-arrow" class="fa-solid fa-arrow-down" title="/AboutMe"></i>
                </span>
            </div>
        )
    }
    return <div></div>;
}

export default Arrows;