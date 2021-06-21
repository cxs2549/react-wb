import styled from "styled-components"

const GalleryWrap = styled.div`
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`

const Gallery = ({ items }) => {
    return (
        <GalleryWrap className="grid  lg:grid-cols-3 xl:grid-cols-5 px-5 lg:px-10 pt-10 pb-16 gap-8">
            {items.map(({ image, title }) => (
                <div key={title}>
                    <img
                        src={image}
                        alt=""
                        className="rounded hover:scale-105 hover:shadow-lg hover:-translate-y-2 transform transition-all duration-500 cursor-pointer"
                    />
                    <h4 className="font-extrabold md:text-lg px-3 pt-2">{title}</h4>
                </div>
            ))}
        </GalleryWrap>
    )
}

export default Gallery
