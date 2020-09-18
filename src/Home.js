import React from "react";
// import './Assets/Pizza.jpg'

function Home () {
    return (
        <div className="home-wrapper">
            <img className="home-image"
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt='very mediocre pizza'
            />
            <button className="md-button pizza-button">
                Pizza?
            </button>
        </div>
    );
}

export default Home