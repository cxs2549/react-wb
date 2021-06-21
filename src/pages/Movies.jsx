import mortalSm from "../assets/movies/movies-mortal.png"
import mortalMd from "../assets/movies/movies-mortal-md.png"
import mortalXL from "../assets/movies/movies-mortal-xl.png"

import conjuring from "../assets/inTheaters/conjuring.png"
import heights from "../assets/inTheaters/heights.png"
import space from "../assets/inTheaters/space.png"
import suicide from "../assets/inTheaters/suicide.png"
import rem from "../assets/inTheaters/rem.png"
import saints from "../assets/inTheaters/saints.png"
import dune from "../assets/inTheaters/dune.png"

import godzilla from "../assets/movieTV/godzilla.png"
import six from "../assets/movieTV/six.png"
import mortal from "../assets/movieTV/mortal.png"
import friends from "../assets/movieTV/friends.png"
import tom from "../assets/movieTV/tom.png"
import legends from "../assets/movieTV/legends.png"
import ww from "../assets/movieTV/ww.png"
import gent from "../assets/movieTV/gent.png"
import little from "../assets/movieTV/little.png"
import looking from "../assets/movieTV/looking.png"
import tenet from "../assets/movieTV/tenet.png"

import Content from "../components/ui/Content"
import Hero from "../components/ui/Hero"

const Movies = () => {
    const inTheaters = [
        {
            tag: "movies",
            img: conjuring,
            title: "the conjuring: the devil made me do it",
            footer: "now in theaters and on HBO max",
        },
        {
            tag: "movies",
            img: heights,
            title: "in the heights",
            footer: "now in theaters and on HBO max",
        },
        {
            tag: "movies",
            img: space,
            title: "space jam: a new legacy",
            footer: "in theaters and on HBO max july 16",
        },
        {
            tag: "movies",
            img: suicide,
            title: "the suicide squad",
            footer: "in theaters and on HBO max august 6",
        },
        {
            tag: "movies",
            img: rem,
            title: "reminiscence",
            footer: "in theaters and on HBO max august 20",
        },
        {
            tag: "movies",
            img: saints,
            title: "the many saints of newark",
            footer: "in theaters and on HBO max september 24",
        },
        {
            tag: "movies",
            img: dune,
            title: "dune",
            footer: "in theaters and on HBO max october 1",
        },
    ]
    const movieTV = [
        {
            tag: "movies",
            img: godzilla,
            title: "godzilla vs. kong",
            footer: "own it now on digital & 4K ultra HD. now in theaters",
        },
        {
            tag: "TV series",
            img: six,
            title: "six feet under",
            footer: "own it today",
        },
        {
            tag: "movies",
            img: mortal,
            title: "mortal kombat (2021)",
            footer: "now in theaters. own it now, watch instantly",
        },
        {
            tag: "TV series",
            img: friends,
            title: "friends",
            footer: "own it today",
        },
        {
            tag: "movies",
            img: tom,
            title: "tom & jerry",
            footer: "now in theaters. buy it on digital and blu-Ray now.",
        },
        {
            tag: "TV series",
            img: legends,
            title: "DC's legends of tomorrow",
            footer: "sundays at 8/7c on the CW. own it today.",
        },
        {
            tag: "movies",
            img: ww,
            title: "wonder woman 1984",
            footer: "own it today",
        },
        {
            tag: "TV series",
            img: gent,
            title: "gentleman jack",
            footer: "own it today",
        },
        {
            tag: "movies",
            img: little,
            title: "the little things",
            footer: "own it today",
        },
        {
            tag: "TV series",
            img: looking,
            title: "looking",
            footer: "own it today",
        },
        {
            tag: "movies",
            img: tenet,
            title: "tenet",
            footer: "own it today on 4K ultra HD, blu-Ray and digital",
        },
    ]

    const hero1 = {
        mobile: mortalSm,
        md: mortalMd,
        xl: mortalXL,
    }

    return (
        <div>
            <Hero
                images={hero1}
                heading="mortal kombat (2021)"
                subheading="now in theaters, own it now, watch instantly"
                getTickets
                own
            />

            <div className="pt-8 pb-4 space-y-8 bg-white">
                {/* In Theaters */}
                <Content items={inTheaters} heading="What's Hot" />
                {/* Movie & TV Favorites */}
                <Content items={movieTV} heading="new releases to own" />
            </div>
        </div>
    )
}

export default Movies
