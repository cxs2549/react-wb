import ExpContent from "../components/ui/ExpContent"
import hollywood from "../assets/exp/hollywood.png"
import london from "../assets/exp/london.png"

const tour = {
    img: hollywood,
}

const tourLondon = {
    img: london,
}

const Experiences = () => {
    return (
        <div className="mt-16 space-y-2 md:grid md:grid-cols-2">
            <ExpContent images={tour} heading="hollywood made here" getTickets preview />
            <ExpContent
                images={tourLondon}
                heading="the making of harry potter"
                getTickets
                preview
            />
        </div>
    )
}

export default Experiences
