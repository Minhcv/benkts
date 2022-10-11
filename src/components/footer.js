import React, {Component} from "react";

class footer extends Component {
    render() {
        return (
        <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
            <div className="row g-5">
                <div className="col-lg-6 pe-lg-5">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>BenKTS</h1>
                    </a>
                    <p><i className="fa fa-map-marker-alt me-2"></i>11 Tố Hữu, Đà Nẵng, Việt Nam</p>
                    <p><i className="fa fa-phone-alt me-2"></i>+091 733 9064</p>
                    <p><i className="fa fa-envelope me-2"></i>duykts03@gmail.com</p>
                    <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-0" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-5">
                    <div className="row g-5">
                        <div className="col-sm-6">
                            <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a className="text-white-50" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h4 className="text-white text-uppercase mb-4">Popular Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a className="text-white-50" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
