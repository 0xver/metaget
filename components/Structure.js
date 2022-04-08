import Header from "./Header"
import Footer from "./Footer"
import React from "react"

export default function Structure({ children }) {
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}
