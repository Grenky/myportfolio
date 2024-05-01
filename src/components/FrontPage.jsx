import React from "react"
import Header from "./Header"

export default function FrontPage() {
    return (
        <div className="fronpage-wrapper">
            <Header />
            <p>Hi, my name is</p>
            <h1>Dmitry Zaiets</h1>
            <h2>i am frontend developer</h2>
            <button>Check my projects</button>
        </div>
    )
}