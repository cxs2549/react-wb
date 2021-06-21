import styled from "styled-components"

const ContentWrap = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    /* margin-top: 65px; */
`
const Contents = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    /* min-width: 33%; */
    
`

const NewsContent = ({ heading, items }) => {
    return (
        <div className="bg-white py-8 mt-16">
            <div className="px-5 lg:px-10">
                <div className="border-l border-gray-400  pl-5 lg:pl-8">
                    <h1 className="text-3xl lg:text-4xl font-extrabold uppercase pb-1 xl:opacity-90 leading-7 text-gray-900">
                        {heading}
                    </h1>
                </div>
            </div>
            <ContentWrap className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-5 px-5 lg:px-10">
                {items.map(({ title, img, tags, date }) => (
                    <Contents key={title} className="mt-8 mr-4 pb-3">
                        <img
                            src={img}
                            className="z-10 cursor-pointer rounded w-full hover:scale-105 hover:shadow-lg hover:-translate-y-2 transform transition-all duration-500"
                            alt=""
                        />
                        <div className="flex space-x-2">
                            {tags.map((tag) => (
                                <p className="text-xs flex justify-center mt-1 mb-2 bg-gray-200  px-3 py-1 capitalize opacity-80 z-20 w-min">
                                    {tag}
                                </p>
                            ))}
                        </div>
                        <h3 className="font-bold text-lg capitalize leading-5 mb-1 cursor-pointer text-gray-900 w-10/12">
                            {title}
                        </h3>
                        <p className="text-xs capitalize opacity-80">{date}</p>
                    </Contents>
                ))}
            </ContentWrap>
        </div>
    )
}

export default NewsContent
