import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button";
import SectionTitle from "../../components/title";
import BackgroundImage from "../../data/images/pre-order/background.png";

const SignUpForm = () => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmpass, setConfirmPass] = useState();

    const useremail = function (e) {
        setEmail(e.target.value);
    }

    const userpass = function (e) {
        setPass(e.target.value);
    }

    const userconfirmpass = function (e) {
        setConfirmPass(e.target.value);
    }

    const setNameandPass = function () {
        if(email && pass & confirmpass)
        {
            if(pass == confirmpass) {
                localStorage.setItem("email", email);
                localStorage.setItem("pass", pass);
            }

            window.location = "/";
        }

    }

    return (
        <section className="contact-us-form-section"
            // style={{backgroundImage: `url(${BackgroundImage})`}}
        >
            <div className="container flex flex-wrap px-4 py-4 justify-between">
                {/* <div className="section-title mb-15">
                    {data?.section_title && (
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    )}
                </div> */}
                <div className="md:w-1/3 sm:w-full">
                    <StaticImage className="rounded-4xl" src="../../data/images/pre-order/avatar.png" alt="Login" />
                </div>
                <div className="md:w-1/2 sm:2-full">
                    <div className="gap-x-8 grid-cols-2 mt-68">
                        <div className="single-fild">
                            <input
                                className="px-6 text-black h-14 mb-6 border-secondary-90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                                type="email"
                                placeholder="E-mail"
                                onChange={useremail}
                            />
                        </div>
                        <div className="single-fild">
                            <input
                                className="px-6 text-black h-14 mb-6 border-secondary-90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                                type="password"
                                placeholder="Password"
                                onChange={userpass}
                            />
                        </div>
                        <div className="single-fild">
                            <input
                                className="px-6 text-black h-14 mb-6 border-secondary-90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={userconfirmpass}
                            />
                        </div>
                        <div
                            className="section-title-warp text-center mt-10"
                        >
                            <button className="text-white font-exo inline-block text-center font-bold group hover:opacity-80 border-solid border-white border-4 text-28base h-73 w-260 leading-73" onClick={setNameandPass}>
                                SignUp
                                <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                />
                            </button>
                            <p className="mt-4 text-22base">
                                Already have an account?&nbsp;&nbsp;&nbsp;
                                <a href="/login" className="underline font-bold text-28base">LogIn</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* {data?.buttons &&
                    data.buttons.map(({ id, content, ...props }) => (
                        <div
                            className="section-title-warp text-center mt-10"
                            key={id}
                        >
                            <Button {...props} className="text-white">
                                {content}
                                <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                />
                            </Button>
                        </div>
                    ))} */}
            </div>
        </section>
    );
};
SignUpForm.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        // buttons: PropTypes.arrayOf(
        //     PropTypes.shape({
        //         content: PropTypes.string,
        //     })
        // ),
    }),
};
export default SignUpForm;
