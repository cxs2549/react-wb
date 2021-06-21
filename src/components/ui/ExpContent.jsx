import styled from "styled-components"

const HeroWrapper = styled.div`
    scroll-snap-align: start;
    button {
        max-width: fit-content;
        max-height: 50px;
        white-space: nowrap;
    }
    #heading,
    p {
        text-shadow: rgba(0, 0, 0, 0.5) -1px -1px 3px, rgba(0, 0, 0, 0.5) 1px -1px 3px,
            rgba(0, 0, 0, 0.5) -1px 1px 3px, rgba(0, 0, 0, 0.5) 1px 1px 3px;
    }
`
const ExpContent = ({ images, heading, subheading, getTickets, preview, own, official, join }) => {
    return (
        <HeroWrapper>
            <div className="relative">
                <img
                    src={images.img}
                    className="cursor-pointer  object-cover"
                    style={{ height: "30rem" }}
                    alt="Hero"
                    id="heroImg"
                />
                <div
                    id="textBox"
                    className= "bg-transparent absolute bottom-0 text-white pb-12 xl:pb-8 px-5 lg:px-10 bg-gradient-to-t from-black w-full"
                >
                    <div className="border-l border-gray-400 xl:border-white pl-5 lg:pl-8">
                        <h1
                            id="heading"
                            className="text-3xl xl:text-5xl font-extrabold uppercase pb-1 hover:text-blue-500 cursor-pointer transition-all duration-150 xl:opacity-90 w-10/12 leading-8"
                        >
                            {heading}
                        </h1>
                        <p className="font-medium pb-4 opacity-80 xl:text-lg xl:opacity-100 capitalize">
                            {subheading}
                        </p>
                        <div className="flex  gap-4 md:space-y-0 md:space-x-4">
                            {getTickets && (
                                <button className="max-w-xs border-2 rounded font-medium text-white px-4 py-2 text-sm hover:opacity-90 transition-all duration-200">
                                    Get Tickets
                                </button>
                            )}
                            {preview && (
                                <button className="max-w-xs border-2 rounded font-medium text-white px-4 py-2 text-sm hover:opacity-90 transition-all duration-200">
                                    Preview Tour
                                </button>
                            )}
                            {own && (
                                <button className="max-w-xs bg-white rounded font-medium text-gray-800 px-8 py-3 hover:opacity-90 transition-all duration-200">
                                    Own It
                                </button>
                            )}
                            {official && (
                                <button className="max-w-xs bg-white rounded font-medium text-gray-800 px-8 py-3 hover:opacity-90 transition-all duration-200">
                                    Official Site
                                </button>
                            )}
                            {join && (
                                <button className="max-w-xs bg-white rounded font-medium text-gray-800 px-8 py-3 hover:opacity-90 transition-all duration-200">
                                    Join Today
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}

export default ExpContent
