import React from 'react';
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about">
                <h1>
                    About Us
                </h1>
            </div>

            <div className="about-text">
                <h2>About the project</h2>
                <p>
                The idea for the project came about due to the 2020 lockdown. Due to restrictions, we have had to change 
                our way of relating to the world. <br /><br />
                To this day, we continue in the same dynamic and due to the difficulty that ordering food can have at 
                home, it occurred to me to create a restaurant search engine, with a simple and pleasant interface for the
                user, to facilitate orders. <br /><br />
                </p>
                <h2>Who can use the EzEAT app?</h2>
                <p>
                This first version of EzEAT is designed for any type of consumer. <br />
                The app has been designed so that users can order from restaurants in a simple and fast way.    
                I have also added the possibility to register your business and thus be able to offer service to all 
                registered users.
                </p>
                <h2>Differences with the official pages</h2>
                <p>
                The big difference with the official web pages is the simplicity to create a new account and the ease of 
                being able to choose any type of associated restaurant, quickly and centrally.
                </p>
            </div>
        </>
    )
};

export default About;