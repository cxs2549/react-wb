import styled from "styled-components"

const Tint = styled.ul`
    z-index: ${({ open }) => (open ? 19 : 0)};
    background: rgba(0, 0, 0, 0.6);
    top: 64px;
    bottom: 0;
    height: 100vh;
    position: absolute;
    left: 0;

    @media (max-width: 1024px) {
        opacity: ${({ open }) => (open ? 1 : 0)};
        visibility: ${({ open }) => (open ? "visible" : "hidden")};
        height: 100vh;
        width: 100%;
        transition: opacity 0.5s ease-in-out;
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`
const Overlay = ({ open }) => {
    return <Tint open={open}></Tint>
}

export default Overlay
