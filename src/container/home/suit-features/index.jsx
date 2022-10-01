import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../../../data/images/pre-order/background.png";
import vid from "../../../data/images/pre-order/1.mp4";

const SuitFeaturesArea = ({ data }) => {

    return (
        <section className="pt-16 pb-8 mb-16 md:pt-24" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="container px-4 text-center">
                {/* {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )} */}
                <div className="flex flex-wrap -mx-3 text-center lg:justify-between">
                    <div className="w-full pt-6 lg:w-1/2 xl:w-1/2 pb-6">
                        <br/>
                        <div className="w-full text-center mt-6">
                            <p className="font-bold leading-7 uppercase px-2 py-2">
                                <h1 className="text-black">Suit</h1>
                            </p>
                            <p className="font-bold leading-7 uppercase px-2 py-2">
                                <h1 className="text-black">Up!</h1>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2">
                        <div className="relative">
                            <div className="content relative w-full px-2 py-2">
                            <Link to="https://scratch.mit.edu/projects/701687305">
                                <video style={{width: "100%"}} autoPlay={"autoplay"} preLoad="auto" muted loop>
                                    <source src={vid} type="video/mp4"/>
                                </video>
                            </Link>
                                {/* <StaticImage className="w-full transition-all align-middle" src="../../../data/images/pre-order/newMarvic.png" alt="MAVRICS" /> */}
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
                
                <h2 className="font-bold leading-7 text-black py-4 md:text-32base sm:text-22base ">
                    {/* <p className="font-bold font-large leading-7 text-22base px-2 py-2"> */}
                        Build your own custom <big>MAVRIC!</big>
                    {/* </p> */}
                </h2>
            </div>
        </section>
    );
};
SuitFeaturesArea.propTypes = {
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
export default SuitFeaturesArea;
