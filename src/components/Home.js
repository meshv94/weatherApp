import React from 'react';
import img1 from "./image/img1.jpeg";
import {
    Link
} from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="header" className="d-flex align-iteam-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Check Weather of your city  <strong className="brand-name">Meshv</strong>
                                    </h1>
                                    <h2>
                                        This data is provided by open weather
                                    </h2>
                                    <div className="mt-3">
                                        <Link to="/Weather" className="btn-get-started">
                                            Check Weather
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={img1} className="img-fluid animated" alt="/" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}
