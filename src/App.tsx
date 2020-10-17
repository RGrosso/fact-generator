import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://api.chucknorris.io/jokes/random";

export default function App() {
    const [fact, setFact] = useState("");

    const generateFact = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setFact(data.value));
    };

    useEffect(() => {
        generateFact();
    }, []);

    return (
        <div className="box">
            <h1>Chuck Norris Fact Generator</h1>
            <div id="infoContainer">
                <p>{fact}</p>
            </div>
            <button onClick={generateFact}>Get New Fact</button>
        </div>
    );
}
