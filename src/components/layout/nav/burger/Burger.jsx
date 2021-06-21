import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Links from "./Links"
import Overlay from "./Overlay"
import "./hamburgers.css"

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

const StyledBurger = styled.button`
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    &:focus {
        outline: none;
    }

    @media screen and (min-width: 1280px) {
        display: none;
    }
`
const Burger = () => {
    const [open, setOpen] = useState(false)

    const openBurger = () => {
        setOpen(!open)
        document.getElementById("burger").classList.toggle("is-active")
        if (window.innerWidth < 1280) {
            document.body.classList.toggle("modal-open")
        }
    }

    let menuRef = useClickOutside(() => {
        setOpen(false)
        document.body.classList.remove("modal-open")
        if (open) {
            document.getElementById("burger").classList.toggle("is-active")
        }
    })

    return (
        <div>
            <div ref={menuRef}>
                <StyledBurger
                    id="burger"
                    open={open}
                    onClick={openBurger}
                    className="hamburger hamburger--emphatic"
                    type="button"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </StyledBurger>
                <Links open={open} close={openBurger} />
            </div>
            <Overlay open={open} />
        </div>
    )
}

export default Burger
