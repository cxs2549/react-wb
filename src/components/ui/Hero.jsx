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
const Hero = ({ images, heading, subheading, getTickets, hbo, own, official, join }) => {
    return (
        <HeroWrapper>
            <img src={images.mobile} className="cursor-pointer md:hidden" alt="" />
            <img
                src={images.md}
                className="cursor-pointer hidden md:block object-contain w-full xl:hidden"
                alt=""
            />
            <div className="relative">
                <img
                    src={images.xl}
                    className="cursor-pointer hidden xl:block object-cover"
                    style={{ height: "30rem" }}
                    alt="Hero"
                    id="heroImg"
                />
                <div
                    id="textBox"
                    className="bg-black xl:bg-transparent xl:absolute bottom-0 text-white pt-8 pb-12 xl:pb-8 px-5 lg:px-10 xl:bg-gradient-to-t from-black w-full"
                >
                    <div className="border-l border-gray-600 xl:border-white pl-5 lg:pl-8">
                        <h1
                            id="heading"
                            className="text-3xl xl:text-5xl font-extrabold uppercase pb-1 hover:text-blue-500 cursor-pointer transition-all duration-150 xl:opacity-90"
                        >
                            {heading}
                        </h1>
                        <p className="font-medium pb-4 opacity-80 xl:text-lg xl:opacity-100 capitalize">
                            {subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row  gap-4 md:space-y-0 md:space-x-4">
                            {getTickets && (
                                <button className="max-w-xs bg-white rounded font-medium text-gray-800 px-8 py-3 hover:opacity-90 transition-all duration-200">
                                    Get Tickets
                                </button>
                            )}
                            {hbo && (
                                <button className="max-w-xs bg-gradient-to-r from-purple-800 to-blue-500 rounded font-medium text-opacity-50  px-8 py-3 hover:opacity-90 transition-all duration-200">
                                    Sign up for HBO Max
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

export default Hero
