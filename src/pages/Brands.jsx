import Hero from "../components/ui/Hero"
import Gallery from "../components/ui/Gallery"
import wb from "../assets/brands/wb.png"
import wbTablet from "../assets/brands/wb-tablet.png"
import wbDesktop from "../assets/brands/wb-desktop.png"
import dc from "../assets/brands/dc.png"
import got from "../assets/brands/got.png"
import middle from "../assets/brands/middle.png"
import scoob from "../assets/brands/scoob.png"
import tom from "../assets/brands/tom.png"
import wizard from "../assets/brands/wizard.png"

const Brands = () => {
    const hero1 = {
        mobile: wb,
        md: wbTablet,
        xl: wbDesktop,
    }

    const brands = [
        { image: dc, title: "DC" },
        { image: got, title: "Game of Thrones" },
        { image: middle, title: "Middle-earth" },
        { image: scoob, title: "Scooby-Doo" },
        { image: tom, title: "Tom and Jerry" },
        { image: wizard, title: "Wizarding World" },
    ]
    return (
        <div className="bg-white">
            <Hero
                images={hero1}
                heading="brands"
                subheading="From witchcraft and wizardry to superhumans and animated animals, explore our iconic brands across film, TV and games."
            />

            <Gallery items={brands} />
        </div>
    )
}

export default Brands
