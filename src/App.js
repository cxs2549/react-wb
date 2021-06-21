import { useRoutes } from "react-router"
import Navbar from "./components/layout/nav/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TV from "./pages/TV"
import Games from "./pages/Games"
import Brands from "./pages/Brands"
import Collections from "./pages/Collections"
import News from "./pages/News"
import Experiences from "./pages/Experiences"
import Footer from "./components/layout/footer/Footer"


const routes = [
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "/tv", element: <TV /> },
    { path: "/games-apps", element: <Games /> },
    { path: "/brands", element: <Brands /> },
    { path: "/collections", element: <Collections /> },
    { path: "/news", element: <News /> },
    { path: "/experiences", element: <Experiences /> },
]

const App = () => {
    let element = useRoutes(routes)
    return (
        <>
            <Navbar />
            <div>
                {element}
            </div>
            <Footer />
        </>
    )
}

export default App
