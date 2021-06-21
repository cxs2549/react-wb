import Hero from "../components/ui/Hero"
import Gallery from "../components/ui/Gallery"
import wb from "../assets/brands/wb.png"
import wbTablet from "../assets/brands/wb-tablet.png"
import wbDesktop from "../assets/brands/wb-desktop.png"

import bach from "../assets/collections/bach.png"
import trueRomance from "../assets/collections/true.png"
import classic from "../assets/collections/classic.png"
import hbo from "../assets/collections/hbo.png"
import ent from "../assets/collections/ent.png"
import chills from "../assets/collections/chills.png"
import acad from "../assets/collections/acad.png"

const Collections = () => {
    const hero1 = {
        mobile: wb,
        md: wbTablet,
        xl: wbDesktop,
    }

    const collections = [
        { image: bach, title: "Everything Bachelor" },
        { image: ent, title: "Entertain the World" },
        { image: trueRomance, title: "True Romance" },
        { image: chills, title: "Chills n' Thrills" },
        { image: hbo, title: "HBO" },
        { image: classic, title: "Classics" },
        { image: acad, title: "Academy Award-Winning Best Pictures" },
    ]
    return (
        <div className="bg-white">
            <Hero
                images={hero1}
                heading="collections"
                subheading="Family favorites, romantic movies and the best of the ‘80s… Whatever you’re feeling, we’ve got a curated list to match it."
            />

            <Gallery items={collections} />
        </div>
    )
}

export default Collections
