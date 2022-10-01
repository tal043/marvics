import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Button from "../../../components/shared/button";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "../../../data/images/pre-order/background.png";

const WelcomeFeaturesArea = ({ data }) => {

    const image1 = getImage("../../../data/images/pre-order/MAVRICS Main.png");

    return (
        <section className="pt-16 mb-16 md:pt-24" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="container px-4">
                {/* {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )} */}
                <div className="flex flex-wrap -mx-3 text-center lg:justify-between">
                    <div className="w-full pt-6 lg:w-1/2 xl:w-1/2 pb-6">
                        <br/>
                        <Link to="https://igg.me/at/MAVRICS/x/23098086#/" className="w-260 bg-red border-red px-4 py-4 font-bold text-22base uppercase xs:w-260 sm:w-260 md:w-260 lg:w-260 xl:w-260">
                            Preorder Now!
                        </Link>
                        <div className="w-full text-left mt-6">
                            <p className="font-bold leading-7 text-black text-22base px-2 py-2">
                                &nbsp;&nbsp;&nbsp;In this sci-fi epic, elite pilots in robotic combat suits wage
                                war on the battlefield of tomorrow.
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                MAVRICS: ORIGINS VOLUME I is a 108 page, oversized 9x12 graphic novel in the style of Gundam's 8th MS team.
                                MAVRICS features giant mecha, special forces soldiers, and global superpowers with secret agendas tryin to take over the world! Order your copy today!
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 xl:w-1/3">
                        <div className="relative">
                            <div className="content relative px-2 py-2">
                                <StaticImage src="../../../data/images/pre-order/MAVRICS Main.png" alt="MAVRICS" />
                                {/* <GatsbyImage className="mb-10" image={image1} /> */}
                                {/* <h3 className="font-bold text-white mb-4">{title}</h3>
                                <p className="text-white leading-7">{description}</p> */}
                            </div>
                            {/* <div className="absolute inset-0 z-0">
                                <GatsbyImage image={image2} alt={title} />
                            </div> */}
                        </div>
                    </div>
                    {/* {data?.items &&
                        data?.items.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 lg:w-1/3 px-4"
                            >
                                <WelcomeFeatures
                                    title={item.headings[0].content}
                                    level={item.headings[0].level}
                                    iconImage={item.images[0].src}
                                    bgShapImage={item.images[1].src}
                                    description={item.description}
                                />
                            </div>
                        ))} */}
                </div>
            </div>
        </section>
    );
};
WelcomeFeaturesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default WelcomeFeaturesArea;
