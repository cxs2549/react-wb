import logo from "../../../assets/logo.png"
import styled from "styled-components"

const StyledFooter = styled.footer`
    /* max-width: 1350px; */
    /* margin: 0 auto; */
`

const Footer = () => {
    const links = [
        "company",
        "press release",
        "careers",
        "international",
        "help",
        "terms of use",
        "privacy policy",
        "sourced traffic disclosure",
        "ad choices",
        "accessibility",
        "cookie settings",
    ]
    const socials = ["facebook", "twitter", "pinterest", "instagram", "linkedin", "youtube"]
    return (
        <StyledFooter className="bg-black text-gray-300  py-5 space-y-8">
            <div className=" px-5 lg:px-10 space-y-8">
                <img src={logo} alt="" />
                <div className="">
                    <p className="text-sm opacity-90 whitespace-nowrap pb-3">Follow Us</p>
                    <div className="flex justify-between text-xl w-7/12 md:w-4/12 xl:w-3/12">
                        {socials.map((social) => (
                            <div key={social} className="cursor-pointer hover:text-white transition-all duration-200">
                                <i className={`fa fa-${social}`} aria-hidden="true"></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" px-5 lg:px-10">
                <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-3">
                    {links.map((link) => (
                        <li
                            key={link}
                            className="cursor-pointer capitalize  hover:text-white text-sm"
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center space-x-3 px-5 lg:px-10">
                <p className="text-xs leading-5">
                    &copy; 2021 SuperVision Design for Warner Bros. Entertainment Inc.{" "}
                    <br className="md:hidden" /> All rights reserved.
                </p>
            </div>
        </StyledFooter>
    )
}

export default Footer
