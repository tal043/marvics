import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PilotsDetailArea from "../container/home/pilots-details";
import Login from "./login";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";

const PilotsPage = ({ data, location, pageContext }) => {
    const [logged, setLogged] = useState();
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);

    useEffect(() => {
        const username = localStorage.getItem("email");
        const userpass = localStorage.getItem("pass");
        const logged_val = username && userpass;

        setLogged(logged_val);
    }, []);

    return (logged ?
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog Without Sidebar" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Pilots"
            />
            <PilotsDetailArea
                data={{
                    items: data.latestPosts.nodes,
                }}
            />
        </Layout> :
        <Login data={data} location={{pathname: "login"}} pageContext={pageContext} poilotsFrom="true" />
    );
};

PilotsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query PilotsPageQuery {
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
        latestPosts: allArticle(
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 376
                                width: 376
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default PilotsPage;
