import React from "react";
import PropTypes from "prop-types";

const EmailSubscribe = ({ emailHandler }) => {
    return (
        <div className="w-full search-bx pl-0 pr-6 xl:pl-4 xl:pr-6">
            <form action="#" className="relative">
                <input
                    onBlur={emailHandler}
                    onChange={emailHandler}
                    type="text"
                    placeholder="Email address"
                    className="px-5 w-full h-14 border-black-90 text-black bg-white-100 border-2 border-solid focus:outline-none"
                />
                <button
                    type="submit"
                    className="absolute px-5 top-0 right-0 bg-subscribe transition-all inline-block h-full hover:text-primary"
                >
                    <p className="text-18base font-bold uppercase">Subscribe</p>
                </button>
            </form>
        </div>
    );
};
EmailSubscribe.propTypes = {
    emailHandler: PropTypes.func
};
export default EmailSubscribe;