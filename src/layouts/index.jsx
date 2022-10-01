import React from "react";
import PropTypes from "prop-types";
import "@assets/css/icofont.min.css";
import "@assets/css/modal-video.min.css";
import Header from "./header";
import Footer from "./footer";
import BodyImage from "../data/images/others/body-bg.png";
// import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
// import { useState, useEffect } from "react";

const Layout = ({ data, children, loading }) => {

    // const [currentIndex, setIndex] = useState(0);
    // const [visible, setVisible] = useState(false);
    // const [currentPos, setCurrentPos] = useState(0);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const scrolledTop = document.documentElement.scrollTop;

    //         if(currentPos < scrolledTop)
    //         {
    //             if(currentIndex != 5)
    //             {
    //                 setVisible(false);
    //             }
    //             else
    //             {
    //                 setVisible(true);
    //             }
    //         }
    //         else
    //         {
    //             setVisible(true);
    //         }

    //         setCurrentPos(scrolledTop);
    //         const index = Math.trunc((scrolledTop + 300) / 700);
    //         setIndex(index);
    //     });
    // }, [currentIndex]);

    // const scrollUp = function () {
    //     window.scrollTo({
    //         top: (currentIndex -1) * 700,
    //         behavior: "smooth"
    //     });
    // }

    // const scrollDown = function () {
    //     window.scrollTo({
    //         top: (currentIndex + 1) * 700,
    //         behavior: "smooth"
    //     });
    // }

    return (
        <div
            className="wrapper"
            style={{
                backgroundImage: `url(${BodyImage})`,
            }}
        >
            {!loading && <Header data={data} />}
            {children}
            {/* {!visible ? 
                <FaArrowCircleDown onClick={scrollDown} className="fixed right-1 z-999 bottom-2 text-xl cursor-pointer" /> :
                <FaArrowCircleUp onClick={scrollUp} className="fixed right-1 z-999 bottom-2 text-xl cursor-pointer" />
            } */}
            {!loading && <Footer data={data} />}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({}),
};

export default Layout;
