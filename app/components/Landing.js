
// absolute imports
import React from "react";
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';


// components
// import mentee modal
import MenteeModal from './MenteeModal';
// import mentor modal
import MentorModal from './MentorModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menteeModalOpen: false,
            mentorModalOpen: false
        };
        this.toggleMenteeModal = this.toggleMenteeModal.bind(this);
        this.toggleMentorModal = this.toggleMentorModal.bind(this);
    }

    toggleMenteeModal() {
        console.log("toggle");
        this.setState({
            menteeModalOpen:  !this.state.menteeModalOpen
        });
    }

    toggleMentorModal() {
        console.log("toggle");
        this.setState({
            mentorModalOpen:  !this.state.mentorModalOpen
        });
    }

    render() {
        return (
            <div>
                <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
                        <li className="sidebar-brand">
                            <a href="#top">Mentor Menu</a>
                        </li>
                        <li>
                            <a href="#top">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <header id="top" className="header">
                    <div className="text-vertical-center">
                        <br/>
                        <img src="./img/Mentor.jpg" alt="" useMap="#image-map" className="img-style"/>
                        <map name="image-map" >
                            <area target="" alt="" title="" href="" coords="155,658,551,573" shape="rect"/>
                            <area target="" alt="" title="" href="" coords="735,555,1098,642" shape="rect"/>
                            <area target="" alt="" title="" href="" coords="353,390,83" shape="circle"/>
                            <area target="" alt="" title="" href="" coords="894,386,78" shape="circle"/>
                        </map>
                       <button className="mentor-img-left" onClick={this.toggleMenteeModal} />
                       <button className="mentor-img-right" onClick={this.toggleMentorModal} />
                    </div>
                </header>

                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                                <p className="lead">This theme features some wonderful photography courtesy of <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services bg-primary">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-10 col-lg-offset-1">
                                <h2>Our Services</h2>
                                <hr className="small"/>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-flask fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-shield fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="callout">
                    <div className="text-vertical-center">
                    </div>
                </aside>

                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1 text-center">
                                <h2>Our Work</h2>
                                <hr className="small" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="portfolio-item">
                                            <a href="#">
                                                <img className="img-portfolio img-responsive" src="./img/portfolio-1.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="portfolio-item">
                                            <a href="#">
                                                <img className="img-portfolio img-responsive" src="./img/portfolio-2.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="portfolio-item">
                                            <a href="#">
                                                <img className="img-portfolio img-responsive" src="./img/portfolio-3.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="portfolio-item">
                                            <a href="#">
                                                <img className="img-portfolio img-responsive" src="./img/portfolio-4.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-dark">View More Items</a>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="call-to-action bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3>The buttons below are impossible to resist.</h3>
                                <a href="#" className="btn btn-lg btn-light">Click Me!</a>
                                <a href="#" className="btn btn-lg btn-dark">Look at Me!</a>
                            </div>
                        </div>
                    </div>
                </aside>

                <section id="contact" className="map">
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A&amp;output=embed"></iframe>
                    <br />
                    <small>
                        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A"></a>
                    </small>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1 text-center">
                                <h4><strong>Mentor Connection</strong>
                                </h4>
                                <p>320 E. 9th Street, Charlotte, NC 28202
                                    <br/>Charlotte, NC 28202</p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                                    <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@sample.com</a>
                                    </li>
                                </ul>
                                <br/>
                                <ul className="list-inline">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
                                    </li>
                                </ul>
                                <hr className="small"/>
                                <p className="text-muted">Copyright &copy; 2017</p>
                            </div>
                        </div>
                    </div>
                    <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
                </footer>

                <MenteeModal
                    isOpen={this.state.menteeModalOpen}
                    toggleModal={this.toggleMenteeModal}
                    setAuth={this.props.setAuth}
                    isAutth={this.props.isAuthenticated} />

                <MentorModal
                    isOpen={this.state.mentorModalOpen}
                    toggleModal={this.toggleMentorModal}
                    setAuth={this.props.setAuth}
                    isAutth={this.props.isAuthenticated} />

            </div>
        );
    }
}

export default Main;
