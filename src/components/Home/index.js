import React from "react";
import './Home.css';

function Home() {
    return (
        <div>
            <div class='mainName'>
                <h1 id="name">Diane Tritchler</h1>
                <h3 id="jobTitle">Full Stack Developer</h3>
                <a href="https://www.linkedin.com/in/diane-tritchler-888438147/" id="linkedin-link">
                    <i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/DianeTritchler" id="github-link">
                    <i class="fa-brands fa-github" ></i></a>
                <i class="fa-solid fa-address-card"></i>
            </div>

        </div>


    );
}

export default Home;