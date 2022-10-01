import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NameImage from "../../../data/images/pilots/name.png";
import BackgroundImage from "../../../data/images/pilots/background.png";
import FunImage from "../../../data/images/pilots/fun.png";
import { StaticImage } from "gatsby-plugin-image";
import ImageUploading from "react-images-uploading";
import ReactCardFlip from "react-card-flip";

const PilotsDetailArea = ({ data }) => {
    const [fullName, setFullName] = useState();
    const [editable, setEditable] = useState(true);
    const [pilotName, setPilotName] = useState();
    const [birth, setPilotBirth] = useState();
    const [spec, setSpec] = useState();
    const [des, setDes] = useState();
    const [model, setModel] = useState();
    const [weapon, setWeapon] = useState();
    const [imageURL, setImageURL] = useState();
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const f_name = localStorage.getItem("fullName");
        const p_name = localStorage.getItem("pilotName");
        const p_birth = localStorage.getItem("pilotBirth");
        const p_spec = localStorage.getItem("pilotSpec");
        const p_des = localStorage.getItem("pilotDes");
        const p_model = localStorage.getItem("pilotModel");
        const p_weapon = localStorage.getItem("pilotWeapon");
        const p_image = localStorage.getItem("pilotImage");

        if(f_name != null && p_name != null && p_birth != null && p_spec != null && p_des != null && p_model != null && p_weapon != null && p_image != null)
        {
            setFullName(f_name);
            setPilotName(p_name);
            setPilotBirth(p_birth);
            setSpec(p_spec);
            setDes(p_des);
            setModel(p_model);
            setWeapon(p_weapon);
            setImageURL(p_image);

            if(editable)
            {
                setEditable(true);
            }
            else
            {
                setEditable(false);
            }
        }
    }, [editable]);

    const onChangeFulName = function (e) {
        setFullName(e.target.value)
    }

    const onChangeName = function (e) {
        setPilotName(e.target.value);
    }

    const onChangeBirth = function (e) {
        setPilotBirth(e.target.value);
    }

    const onChangeSpec = function (e) {
        setSpec(e.target.value);
    }

    const onChangeDes = function (e) {
        setDes(e.target.value);
    }

    const onChangeModel = function (e) {
        setModel(e.target.value);
    }

    const onChangeWeapon = function (e) {
        setWeapon(e.target.value);
    }

    const saveData = function () {
        if(fullName && pilotName && birth && spec && des && model && weapon && imageURL)
        {
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("pilotName", pilotName);
            localStorage.setItem("pilotBirth", birth);
            localStorage.setItem("pilotSpec", spec);
            localStorage.setItem("pilotDes", des);
            localStorage.setItem("pilotModel", model);
            localStorage.setItem("pilotWeapon", weapon);
            localStorage.setItem("pilotImage", imageURL);  
            setEditable(true);
        }
        
        setFlip(!flip);  
    }

    const editData = function () {
        setEditable(false);
        setFlip(!flip);
    }

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log("This is image list", imageList);
        console.log(imageList, addUpdateIndex);
        const image_url = imageList[0].data_url;
        setImageURL(image_url);
        setImages(imageList);
    };

    return (
        <section className="blog-section mb-4">
            <div className="container px-4 text-center">
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <>
                    <div
                        className="relative w-full h-55 md:w-full lg:h-80 lg:w-2/3 xl:w-1/2 md:h-23.5 object-fit object-cove text-center mx-auto bg-cover bg-no-repeat bg-center"
                        style={{backgroundImage: `url(${NameImage})`}}
                    >
                        <input
                            onBlur={onChangeFulName}
                            onChange={onChangeFulName}
                            type="text"
                            placeholder="Name"
                            value={fullName ? fullName : ""}
                            className="px-5 mt-1 text-center md:mt-6 mb-6 w-1/2 md:w-1/3 h-14 font-bold text-22base md:text-35base text-black bg-transparent focus:outline-none"
                        />
                        <button className="absolute right-4 top-2 md:top-4 font-bold text-22base md:text-35base border-lightgray border-2 rounded-lg px-1 py-1 text-lightgray border-solid hover:opacity-80" onClick={saveData}>
                            Save
                        </button>
                    </div>
                    <div
                        className="w-full md:w-full lg:w-2/3 xl:w-1/2 mt-2 mx-auto pl-3"
                    >
                        <div
                            className="flex h-15.5 bg-cover bg-no-repeat px-1 py-2"
                            style={{backgroundImage: `url(${BackgroundImage})`}}
                        >
                            <div className="w-1/3 px-2 py-4 pl-10 h-230">
                            <ImageUploading
                                single
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                                acceptType={["jpg", "gif", "png", "tif"]}
                            >
                                {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                                }) => (
                                // write your building UI
                                <div className="w-full h-full">
                                    <button
                                        className="w-full h-full"
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                            {!imageURL ? (<StaticImage
                                                className="w-full h-full z-10 object-fit object-cover"
                                                src="../../../data/images/pilots/image.png"
                                                alt=""
                                            />) : <img src={imageURL} className="w-full object-fit object-cover h-full z-10" />}
                                    </button>
                                </div>
                                )}
                            </ImageUploading>
                            </div>
                            <div className="w-2/3 text-left mt-6 px-2 py-2">
                                <div className="py-2">                                
                                    <span className="uppercase  text-base font-bold text-black">Pilot Name:</span> &nbsp;&nbsp;&nbsp;
                                    <input
                                        onBlur={onChangeName}
                                        onChange={onChangeName}
                                        type="text"
                                        placeholder="Pilot"
                                        value={pilotName ? pilotName : ""}
                                        className="ml-2 font-bold text-base text-black bg-transparent focus:outline-none"
                                    />
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black underline">Place of birth:</span> &nbsp;&nbsp;&nbsp;
                                        <input
                                            onBlur={onChangeBirth}
                                            onChange={onChangeBirth}
                                            type="date"
                                            placeholder="Birth"
                                            value={birth ? birth : ""}
                                            className="ml-2 font-bold text-18base text-black bg-transparent focus:outline-none"
                                        />
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black">Specialization:</span> &nbsp;&nbsp;&nbsp;
                                        <input
                                            onBlur={onChangeSpec}
                                            onChange={onChangeSpec}
                                            type="text"
                                            value={spec ? spec : ""}
                                            placeholder="Spec"
                                            className="ml-2 w-37 font-bold text-18base text-black bg-transparent focus:outline-none"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-full lg:w-2/3 xl:w-1/2 mt-2 mx-auto pl-9"
                    >
                        <div
                            className="flex h-15.5 bg-cover bg-no-repeat px-4 py-2"
                            style={{backgroundImage: `url(${BackgroundImage})`}}
                        >
                            <div className="w-full text-left px-8 py-4">
                                <div className="py-2">                                
                                    <span className="uppercase font-bold text-base underline text-black">Description:</span> &nbsp;&nbsp;&nbsp;
                                    <input
                                        onBlur={onChangeDes}
                                        onChange={onChangeDes}
                                        type="text"
                                        value={des ? des : ""}
                                        placeholder="Description"
                                        className="ml-2 font-bold text-base text-black bg-transparent focus:outline-none"
                                    />
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black">Model:</span> &nbsp;&nbsp;&nbsp;
                                        <input
                                            onBlur={onChangeModel}
                                            onChange={onChangeModel}
                                            type="text"
                                            value={model ? model : ""}
                                            placeholder="Model"
                                            className="ml-2 font-bold text-18base text-black bg-transparent focus:outline-none"
                                        />
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase underline  text-base font-bold text-black">Weapons:</span> &nbsp;&nbsp;&nbsp;
                                        <input
                                            onBlur={onChangeWeapon}
                                            onChange={onChangeWeapon}
                                            type="text"
                                            value={weapon ? weapon : ""}
                                            placeholder="Weapons"
                                            className="ml-2 font-bold text-18base text-black bg-transparent focus:outline-none"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-full lg:w-2/3 xl:w-1/2 mt-2 mx-auto bg-cover bg-no-repeat text-left bg-center px-2 py-1"
                        style={{backgroundImage: `url(${FunImage})`}}
                    >
                        <p className="uppercase font-bold text-black text-18base">Fun Fact:</p>
                    </div>
                </>
                <>
                    <div
                        className="relative w-1/2 h-23.5 text-center mx-auto bg-cover object-fit object-cove bg-no-repeat bg-center"
                        style={{backgroundImage: `url(${NameImage})`}}
                    >
                        <p className="font-bold text-35base text-black pt-6">{fullName}</p><button className="absolute right-4 top-4 font-bold text-35base border-lightgray border-2 rounded-lg px-1 py-1 text-lightgray border-solid hover:opacity-80" onClick={editData}>
                            Edit
                        </button>
                    </div>
                    <div
                        className="w-1/2 mt-2 mx-auto pl-3"
                    >
                        <div
                            className="flex h-15.5 bg-cover bg-no-repeat px-1 object-fit object-cover py-2"
                            style={{backgroundImage: `url(${BackgroundImage})`}}
                        >
                            <div className="w-1/3 px-2 py-4 pl-10 h-230">
                                <img src={imageURL} className="w-full h-full z-10 object-fit object-cover" />
                            </div>
                            <div className="w-2/3 text-left mt-6 px-2 py-2">
                                <div className="py-2">                                
                                    <span className="uppercase  text-base font-bold text-black">Pilot Name:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{pilotName}</span>
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black underline">Place of birth:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{birth}</span>
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black">Specialization:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{spec}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-1/2 mt-2 mx-auto pl-9"
                    >
                        <div
                            className="flex h-15.5 bg-cover bg-no-repeat px-4 py-2"
                            style={{backgroundImage: `url(${BackgroundImage})`}}
                        >
                            <div className="w-full text-left px-8 py-4">
                                <div className="py-2">                                
                                    <span className="uppercase font-bold text-base underline text-black">Description:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{des}</span>
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase font-bold  text-base text-black">Model:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{model}</span>
                                </div>
                                <div className="py-2">                                
                                    <span className="uppercase underline  text-base font-bold text-black">Weapons:</span> &nbsp;&nbsp;&nbsp;
                                    <span className="text-base font-bold text-black">{weapon}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-1/2 mt-2 mx-auto bg-cover bg-no-repeat text-left bg-center px-2 py-1"
                        style={{backgroundImage: `url(${FunImage})`}}
                    >
                        <p className="uppercase font-bold text-black text-18base">Fun Fact</p>
                    </div>
                </>
                </ReactCardFlip>
            </div>
        </section>
    );
};
PilotsDetailArea.propTypes = {
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

export default PilotsDetailArea;
