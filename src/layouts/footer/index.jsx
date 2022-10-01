import React, { Fragment } from "react";
import PropTypes from "prop-types";
import GamingUpdateArea from "./gaming-update-widget";
import FooterInfoWidget from "@components/widget/footer-info-widget";
import FooterContactInfoWidget from "@components/widget/footer-contact-info-widget";
import FooterWinnerWidget from "@components/widget/todays-winners-widget";
import FooterMemuList from "@components/widget/contact-menu-widget";
import { StaticImage } from "gatsby-plugin-image";
import EmailSubscribe from "../../components/email-subscribe";
import { Link } from "gatsby";

const Footer = ({ data }) => {

    const emailHandler = function (e) {
        const emailAddress = e.target.value;
    }

    return (
        <Fragment>
            {/* <GamingUpdateArea /> */}
            <footer>
                {/* <div className="py-16 md:py-24">
                    <div className="container">
                        <div className="grid gap-8 md:gap-6 lg:gap-6 xxl:gap-16 grid-cols-1 sm:grid-cols-12">
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-4 lg:mr-12">
                                <FooterInfoWidget
                                    infoData={data?.footer?.[0]}
                                />
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-3">
                                <FooterContactInfoWidget
                                    infoData={data?.footer?.[1]}
                                />
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-3">
                                <FooterWinnerWidget
                                    infoData={data?.footer?.[2]}
                                />
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-2">
                                <FooterMemuList infoData={data?.footer?.[3]} />
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="footer-bottom bg-black mt-16">
                    <div className="container w-full">
                        <div className=" flex flex-col xl:flex-row justify-between items-center py-6">
                            <div className="flex flex-col md:flex-row md:items-center w-full xl:w-[50%] ">
                                <div className="flex w-full md:w-[50%] justify-evenly bg-white">
                                    <Link to="/">
                                        <StaticImage className="w-50 h-50 transition-all align-middle" src="../../data/images/pre-order/facebook.png" alt="Facebook" />
                                    </Link>
                                    <Link to="/">
                                        <StaticImage className="w-50 h-50 transition-all align-middle" src="../../data/images/pre-order/instagram.png" alt="Instagram" />
                                    </Link>
                                    <Link to="/">
                                    <StaticImage className="w-50 h-50 transition-all align-middle" src="../../data/images/pre-order/twitter.png" alt="Twitter" />
                                    </Link>
                                    <Link to="/">
                                        <StaticImage className="w-50 h-50 transition-all align-middle" src="../../data/images/pre-order/youtube.png" alt="Youtube" />
                                    </Link>
                                </div>
                                <div className="flex w-full mt-20 md:mt-0 md:w-[50%] justify-evenly">
                                    <Link to="/" className="block">
                                        <span className="uppercase font-bold mx-3">Contact</span>
                                    </Link>
                                    <Link to="/" className="block">
                                        <span className="uppercase font-bold">Newsletter</span>
                                    </Link>
                                </div>
                                {/* &copy; {new Date().getFullYear()} MAVRICS MADE WITH{" "}
                                <i className="icofont-heart"></i> BY
                                <a
                                    className="hover:text-primary"
                                    href="https://hasthemes.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {" "}
                                    HasThemes
                                </a> */}
                            </div>
                            <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-20 xl:mt-0 xl:w-[50%]">
                                <EmailSubscribe
                                    emailHandler={emailHandler}
                                />
                                <Link to="https://www.theglobalfrequency.org" className="mt-20 sm:mt-0">
                                    <StaticImage className="w-50 h-50 transition-all align-middle" src="../../data/images/pre-order/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            <div className="">
                            </div>
                            {/* <div className="footer-copyright-right">
                                <div className="flex">
                                    <a
                                        href="https://hasthemes.com/"
                                        className="text-white hover:text-primary"
                                    >
                                        Terms &amp; Condition{" "}
                                    </a>
                                    <span className="mx-3"> || </span>
                                    <a
                                        href="https://hasthemes.com/"
                                        className="text-white hover:text-primary"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};
Footer.propTypes = {
    data: PropTypes.shape({
        footer: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }),
};
export default Footer;
