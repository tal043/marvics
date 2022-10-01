import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/shared/button";
import { StaticImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../../../data/images/pre-order/background.png";

const PilotFeatures = ({ data }) => {

    return (
        <section className="pt-16 pb-16 mb-16 md:pt-24" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="container px-4 text-center">
                {/* {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )} */}
                <div className="flex flex-wrap -mx-3 text-center lg:justify-between">
                    <div className="w-full lg:w-1/2 xl:w-1/2">
                        <div className="relative">
                            <div className="content relative w-full px-2 py-2">
                                <StaticImage className="w-full transition-all align-middle" src="../../../data/images/pre-order/pilots.png" alt="MAVRICS" />
                                {/* <GatsbyImage className="mb-10" image={image1} /> */}
                                {/* <h3 className="font-bold text-white mb-4">{title}</h3>
                                <p className="text-white leading-7">{description}</p> */}
                            </div>
                            {/* <div className="absolute inset-0 z-0">
                                <GatsbyImage image={image2} alt={title} />
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full pt-6 lg:w-1/2 xl:w-1/2 pb-6">
                        <br/>
                        <div className="w-full text-center px-2 py-2 lg:mt-68 xl:mt-80">
                            <h2 className="font-bold leading-7 text-black py-4 lg:text-1xl xl:text-1xl md:text-1xl sm:text-35base ">
                                Pilot Registry Database
                            </h2>
                            <br/>
                            <br/>
                            <br/>
                            <h2 className="font-bold leading-7 text-black py-4 text-22base md:text-28base lg:text-28base xl:text-28base sm:text-20base">
                                Learn all about the new recruits<br/>
                                and old friends in the MAVRICS universe
                            </h2>
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
PilotFeatures.propTypes = {
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
export default PilotFeatures;
