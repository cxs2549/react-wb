import { NavLink } from "react-router-dom"
import styled from "styled-components"
import movies from "../../../../assets/icons/movies.png"
import tv from "../../../../assets/icons/tv.png"
import games from "../../../../assets/icons/games.png"
import brands from "../../../../assets/icons/brands.png"
import collections from "../../../../assets/icons/collections.png"
import news from "../../../../assets/icons/news.png"
import experiences from "../../../../assets/icons/experiences.png"

const List = styled.div`
    list-style: none;
    display: flex;
    height: 65px;
    z-index: 20;
    background: #0c0c0c;
    color: white;
    width: 100%;

    a {
        width: min-content;
        &.active {
            color: #fff;
            font-weight: 600;
        }
    }
    @media (max-width: 1024px) {
        display: flex;
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
        top: 55px;
        left: 0;
        height: 100vh;
        padding-top: 2rem;
        width: 300px;
        transition: transform 0.3s ease-in-out;
    }
`
const Links = ({ open, close }) => {
    const links = [
        { name: "movies", to: "/movies", img: movies },
        { name: "TV shows", to: "/tv", img: tv },
        { name: "games & apps", to: "/games-apps", img: games },
        { name: "brands", to: "/brands", img: brands },
        { name: "collections", to: "/collections", img: collections },
        { name: "news", to: "/news", img: news },
        { name: "experiences", to: "/experiences", img: experiences },
    ]
    return (
        <List open={open}>
            {links.map((link, i) => (
                <li
                    key={i}
                    className="md:rounded text-gray-400   capitalize  md:justify-center w-full hover:text-gray-100 xl:mr-12"
                >
                    <NavLink
                        to={link.to}
                        onClick={close}
                        activeClassName="active"
                        className="flex space-x-8 xl:space-x-3 items-center p-5 xl:px-0"
                    >
                        <img src={link.img} className="opacity-90" alt="" />
                        <p className="whitespace-nowrap">{link.name}</p>
                    </NavLink>
                </li>
            ))}
        </List>
    )
}

export default Links
