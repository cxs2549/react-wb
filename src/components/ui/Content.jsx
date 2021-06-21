import styled from "styled-components"



const ContentWrap = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
`
const Contents = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    min-width: 33%;
    @media screen and (min-width: 768px) {
        min-width: 20%;
    }
    @media screen and (min-width: 1024px) {
        min-width: 19.2%;
    }
    @media screen and (min-width: 1280px) {
        min-width: 13.25%;
        max-width: 13.25%;
    }
`

const Content = ({ heading, items }) => {
    return (
        <div>
            <div className="px-5 lg:px-10">
                <div className="border-l border-gray-400  pl-5 lg:pl-8">
                    <h1 className="text-3xl lg:text-4xl font-extrabold uppercase pb-1 xl:opacity-90 leading-7 text-gray-900">
                        {heading}
                    </h1>
                </div>
            </div>
            <ContentWrap className="flex grid-cols-3 overflow-auto gap-3 md:grid-cols-5 px-5 lg:px-10">
                {items.map(({ title, img, tag, footer }) => (
                    <Contents key={title} className="mt-8 mr-4 pb-3">
                        <img
                            src={img}
                            className="z-10 cursor-pointer rounded-t w-full hover:scale-105 hover:shadow-lg hover:-translate-y-2 transform transition-all duration-500"
                            alt=""
                        />
                        <p className="text-xs flex justify-center mt-1 mb-2 bg-gray-200  px-3 py-1 capitalize opacity-80 z-20">
                            {tag}
                        </p>
                        <h3 className="font-bold capitalize leading-5 mb-1 cursor-pointer text-gray-900">
                            {title}
                        </h3>
                        <p className="text-xs capitalize opacity-80">{footer}</p>
                    </Contents>
                ))}
            </ContentWrap>
        </div>
    )
}

export default Content
