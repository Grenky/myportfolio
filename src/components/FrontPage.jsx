import React from "react";
import Header from "./Header";
import '../styles/FrontPage.scss';
import { Link } from "react-router-dom";


export default function FrontPage() {
    return (
        <div className="fronpage-wrapper">
            <Header />
            <div className="frontpage-content">
                <p>Hi, my name is</p>
                <h1>Dmitry Zaiets</h1>
                <h2>i am frontend developer</h2>
                <Link to="/Projects" className="front-btn">Check my projects</Link>
            </div>
        </div>
    )
}