import React from "react";
import "./Preview.css";

const Preview = ({  name,
    email,
    phone,
    experience,
    education,
    skills, }) => {
    return (
        <div className="m-2 border border-white -mt-2 p-2">
            <div className="page">
                <div className="headerContainer">
                    <div className="header">
                        <span className="name">{name || "sample name"}</span>
                        <br />
                        <span className="paragraph">intro text<br />line1<br />line2<br />line3</span>
                    </div>
                    <div className="header">
                        <span className="paragraph">J‐90, NIT Srinagar, Hazaratbal<br />Srinagar, J& K‐190 006, India<br />Mob.: +91-{phone || "9998888222"}<br />Email.{email || "me@mysite.com"}:<br />Web: mysite.com</span>
                    </div>
                </div>

                <div className="columnsContainer">
                    <div className="columnSmall">
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Links:</h5>
                            <span className="paragraph">{"No Links" || links}</span>
                        </div>
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Skills:</h5>
                            <span className="paragraph">{skills || "Skills"}</span>
                        </div>
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">CourseWork:</h5>
                            <span className="paragraph">{"No coursework yet"}</span>
                        </div>
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Education:</h5>
                            <span className="paragraph">{education}</span>
                        </div>
                    </div>
                    <div className="columnLarge">
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Experience:</h5>
                            <span className="paragraph">{experience}</span>
                        </div>
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Achievements/ Awards:</h5>
                            <span className="paragraph">{experience}</span>
                        </div>
                        <div>
                            <h5 className="heading border-b-2 border-black w-full mb-0">Side Project:</h5>
                            <span className="paragraph">{experience}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;