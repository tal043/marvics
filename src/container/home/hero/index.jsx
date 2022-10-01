import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/shared/button";
import HeroImage1 from "../../../data/images/hero/hero.png";
import HeroImage2 from "../../../data/images/hero/books image.jpg";
import HeroImage3 from "../../../data/images/hero/messages image.jpg";
import HeroImage4 from "../../../data/images/hero/pilots image.jpg";
import HeroImage5 from "../../../data/images/hero/book.png";
import HeroImage6 from "../../../data/images/hero/merch.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "gatsby";


const HeroArea = ({ data }) => {

    return (
        <section
            className="relative mt-104 mb-16 bg-no-repeat bg-center bg-cover items-center"
            // style={{
            //     backgroundImage: `url(${HeroImage})`,
            // }}
        >  
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/">
                        <img src={HeroImage1} className="object-fit object-cover" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="https://igg.me/at/MAVRICS/x/23098086#/">
                        <img src={HeroImage2} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="https://scratch.mit.edu/projects/701687305">
                        <img src={HeroImage5} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/pilots">
                        <img src={HeroImage3} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={HeroImage4} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={HeroImage6} />
                    </Link>
                </SwiperSlide>
            </Swiper>

            <div className="container px-4 z-10">
                <div className="absolute z-20 left-0 w-full text-white mt-16 bottom-40 md:bottom-23.5 xs:bottom-7.5 sm:bottom-55 lg:bottom-60 xl:bottom-60" align="center">
                
                    {/* {data?.headings?.[0] && (
                        <h1 className="mb-6 sm:mb-10 text-shadow uppercase max-w-3xl">
                            {data.headings[0].content}
                        </h1>
                    )}
                    {data?.texts?.[0] && (
                        <p className="text-base  lg:text-md font-bold mb-6 sm:mb-10 ">
                            {data.texts[0].content}
                        </p>
                    )} */}
                    {data?.buttons &&
                        data.buttons.map(({ id, content, ...props }) => (
                            <Button key={id} {...props} className="text-white">
                                {content}
                                {/* <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                /> */}
                            </Button>
                        ))}
                </div>
            </div>
        </section>
    );
};
HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};
export default HeroArea;
