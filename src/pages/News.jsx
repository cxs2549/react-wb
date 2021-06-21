import NewsContent from "../components/ui/NewsContent"
import dc from "../assets/news/dc.png"
import space from "../assets/news/space.png"
import friends from "../assets/news/friends.png"
import fandome from "../assets/news/fandome.png"

const News = () => {
    const articles = [
        {
            tags: ["read"],
            img: dc,
            title: "DC Lineup for Free Comic Book Day 2021 Unveiled",
            date: "may 24, 2021",
        },
        {
            tags: ["read", "watch"],
            img: space,
            title: "Space Jam: A New Legacy Summer 2021 Merch...",
            date: "may 20, 2021",
        },
        {
            tags: ["read", "watch"],
            img: friends,
            title: "friends: the reunion premiering may 27 on HBO...",
            date: "may 18, 2021",
        },
        {
            tags: ["read", "watch"],
            img: fandome,
            title: "DC FanDome is Returning in 2021!",
            date: "april 28, 2021",
        },
    ]
    return (
        <div className="">
            <NewsContent heading="news articles" items={articles} />
        </div>
    )
}

export default News
