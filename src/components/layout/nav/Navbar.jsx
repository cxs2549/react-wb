import { Link } from "react-router-dom"
import styled from "styled-components"
import Burger from "./burger/Burger"
import logo from "../../../assets/logo.png"
import { useEffect, useRef, useState } from "react"

let useClickOutside = (handler) => {
    let menuRef = useRef()

    useEffect(() => {
        let outsideHandler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                handler()
            }
        }

        document.addEventListener("mousedown", outsideHandler)

        return () => {
            document.removeEventListener("mousedown", outsideHandler)
        }
    })

    return menuRef
}

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0c0c0c;
    color: #f1f1f1;
    z-index: 50;
    div {
        display: flex;
        align-items: center;
        /* gap: 1.5rem; */
    }
    #searchWrap {
        z-index: 20;
        transition: all 0.3s;
        @media screen and (min-width: 1280px) {
            max-width: 20%;
        }
        input {
            height: 55px;
            width: 100%;
            background: #272727;
        }
    }
    #searchButton {
        z-index: 21;
    }
`
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleSearch = () => {
        setOpen(!open)
    }

    let menuRef = useClickOutside(() => {
        setOpen(false)
    })

    return (
        <Nav className="px-5 lg:px-10">
            <div className="cursor-pointer">
                <Link to="/" className="mr-8">
                    <img src={logo} alt="" />
                </Link>
                <Burger />
            </div>
            <div ref={menuRef} className="text-xl">
                {open && (
                    <div id="searchWrap" className="absolute left-0 right-0 xl:mr-5 xl:left-auto">
                        <input
                            type="search"
                            placeholder="Search"
                            className="px-5 focus:outline-none text-gray-100"
                        />
                    </div>
                )}
                <button id="searchButton" className="focus:outline-none" onClick={handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </Nav>
    )
}

export default Navbar
