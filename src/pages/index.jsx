import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import HeroArea from "../container/home/hero";
import WelcomeFeaturesArea from "../container/home/welcome-features";
import PilotFeatures from "../container/home/pilot-features";
import ProductFeatures from "../container/home/product-features";
import WatchLiveStremingArea from "../container/home/watch-live-streaming";
import MatchArea from "../container/home/match";
import PopulerGamesArea from "../container/home/popular-game";
import TestimonialArea from "../container/home/testimonial";
import LatestBlogArea from "../container/home/latest-blog";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";
import SuitFeaturesArea from "../container/home/suit-features";
import vid from '../data/images/intro.mp4';
import Zoom from "@mui/material/Zoom";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const IndexPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const [currentPos, setCurrentPos] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        }, 4000);

        window.addEventListener('scroll', () => {
            const scrolledTop = document.documentElement.scrollTop;

            if(currentPos < scrolledTop)
            {
                if(currentIndex != 5)
                {
                    setVisible(false);
                }
                else
                {
                    setVisible(true);
                }
            }
            else
            {
                setVisible(true);
            }

            setCurrentPos(scrolledTop);
            const index = Math.trunc((scrolledTop + 300) / 700);
            setIndex(index);
        });
    }, [currentIndex]);

    
    const scrollUp = function () {
        window.scrollTo({
            top: (currentIndex -1) * 700,
            behavior: "smooth"
        });
    }

    const scrollDown = function () {
        window.scrollTo({
            top: (currentIndex + 1) * 700,
            behavior: "smooth"
        });
    }
    
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
            loading={loading}
            className="relative"
        >
            <Zoom in={loading}>
                <div className="loader-container" style={{marginTop: "-104px"}}>
                    <video controls autoPlay={"autoplay"} preLoad="auto" muted loop>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            </Zoom>
            {!visible ? 
                <FaArrowCircleDown onClick={scrollDown} className="fixed right-1 z-999 bottom-2 text-xl cursor-pointer" /> :
                <FaArrowCircleUp onClick={scrollUp} className="fixed right-1 z-999 bottom-2 text-xl cursor-pointer" />
            }
            <SEO title="Home" pathname="/" />
            <HeroArea data={content["hero-section"]} />
            {!loading && <WelcomeFeaturesArea data={content["welcome-section"]} />}
            {!loading &&<SuitFeaturesArea data={content["welcome-section"]} />}
            {!loading && <PilotFeatures data={content["welcome-section"]} />}
            {!loading && <ProductFeatures data={content["welcome-section"]} />}
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allMatch: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGames: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
            }
        }
        allMatch(sort: { order: DESC, fields: date }, limit: 3) {
            nodes {
                ...Matchs
            }
        }
        allGames(sort: { order: DESC, fields: date }, limit: 4) {
            nodes {
                ...Games
            }
        }
        latestPosts: allArticle(
            limit: 4
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                width: 200
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
