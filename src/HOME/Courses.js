    /* eslint-disable react/jsx-no-target-blank */
        import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

        function Courses() {
        return (
            <div>
                
        <section className="our-courses" id="courses">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                    <h6>OUR COURSES</h6>
                    <h4>What You Can <em>Learn</em></h4>
                    <p>You just think about TemplateMo whenever you need free CSS templates for your business website</p>
                </div>
                </div>
                <div className="col-lg-12">
                <div className="naccs">
                    <div className="tabs">
                    <div className="row">
                        <div className="col-lg-3">
                        <div className="menu">
                            <div className="active gradient-border"><span>Web Development</span></div>
                            <div className="gradient-border"><span>Graphic Design</span></div>
                            <div className="gradient-border"><span>Web Design</span></div>
                            <div className="gradient-border"><span>WordPress</span></div>
                        </div>
                        </div>
                        <div className="col-lg-9">
                        <ul className="nacc">
                            <li className="active">
                            <div>
                                <div className="left-image">
                                <img src="assets/images/courses-01.jpg" alt=""/>
                                <div className="price"><h6>$128</h6></div>
                                </div>
                                <div className="right-content">
                                <h4>Web Development</h4>
                                <p>Did you know that you can visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS website</a> for latest listing of HTML templates and a variety of useful templates. 
                                <b/><b/>You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.</p>
                                <span>36 Hours</span>
                                <span>4 Weeks</span>
                                <span className="last-span">3 Certificates</span>
                                <div className="text-button">
                                    <a href="contact-us.html">Subscribe Course</a>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div>
                                <div className="left-image">
                                <img src="assets/images/courses-02.jpg" alt=""/>
                                <div className="price"><h6>$156</h6></div>
                                </div>
                                <div className="right-content">
                                <h4>Creative Graphic Design</h4>
                                <p>You are not allowed to redistribute this template ZIP file on any other website without a permission from us.<b/><b/>There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!</p>
                                <span>48 Hours</span>
                                <span>6 Weeks</span>
                                <span className="last-span">1 Certificate</span>
                                <div className="text-button">
                                    <a href="contact-us.html">Subscribe Course</a>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div>
                                <div className="left-image">
                                <img src="assets/images/courses-03.jpg" alt=""/>
                                <div className="price"><h6>$184</h6></div>
                                </div>
                                <div className="right-content">
                                <h4>Web Design</h4>
                                <p>Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.<b/><b/>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
                                <span>28 Hours</span>
                                <span>4 Weeks</span>
                                <span className="last-span">1 Certificate</span>
                                <Button className="text-button danger">
                                    <Link to="/">Subscribe Course</Link>
                                </Button>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div>
                                <div className="left-image">
                                <img src="assets/images/courses-04.jpg" alt=""/>
                                <div className="price"><h6>$76</h6></div>
                                </div>
                                <div className="right-content">
                                <h4>WordPress Introduction</h4>
                                <p>Quinoa roof party squid prism sustainable letterpress cray
                                    hammock tumeric man bun mixtape tofu subway tile cronut. 
                                    Deep v ennui subway tile organic seitan.<b/><b/>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
                                <span>48 Hours</span>
                                <span>4 Weeks</span>
                                <span className="last-span">2 Certificates</span>
                                <div className="text-button">
                                    <a href="contact-us.html">Subscribe Course</a>
                                </div>
                                </div>
                            </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="simple-cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 offset-lg-1">
          <div className="left-image">
            <img src="assets/images/cta-left-image.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <h6>Get the sale right now!</h6>
          <h4>Up to 50% OFF For 1+ courses</h4>
          <p>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
          <div className="white-button">
            <a href="contact-us.html">View Courses</a>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
        }

        export default Courses
