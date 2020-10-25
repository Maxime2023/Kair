import React, { Component } from 'react';
import img1 from "../images/val4.png";
import img2 from "../images/val2.png";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "./valeurs.scss"
import e1 from "../images/p1.png";
import e2 from "../images/p2.png";
import e3 from "../images/p3.png";
import e4 from "../images/p4.png";
import e5 from "../images/p5.png";
import e6 from "../images/p6.png";
import e7 from "../images/p7.png";
import e8 from "../images/p8.png";
import e9 from "../images/p9.png";
import ship from "../images/ship_e.png"
import fbb from "../images/fbb.png"
import footer from "../images/footer_e.png"

class valeurs extends Component {
    render() {
        localStorage.setItem("trans", false)
        return (
            <div>
                <div className="title">
                    Made in France
                </div>
                <div className="subtitle">
                    French Expertise
                </div>
                <div className="wrapper-valeur">
                    <div className="val1">
                        <img src={img1} alt="Logo" />
                        <div className="val1txt">
                        K-air developps and produces, since its creation in 2020, 
                        all of its products in France. We would like to thank every
                         member of our team, those people working everyday, giving 
                         everything they have to garanty everyone’s health. We
                          therefore recruted the elite of workshop workers to 
                          produce our masks. Our objective : create a product at
                           the top of its capabilities. 
                        </div>
                    </div>
                    <div className="val2">
                        <img src={img2} alt="Logo" />
                        <div className="val2txt">
                        Thus, the research and development program as well as the material tests were carried out in partnership with engineers from the National Institute of Arts and Crafts and independent European laboratories. It is also essential for us to work in collaboration with ESATs on the packaging of our products. We believe that it is possible to offer a technological and innovative product that respects all stakeholders, whether in the choice of materials, the manufacturing process and the conditions of realization. 

                        </div>
                    </div>
                </div>
                <div className="title">Our team </div>
                <div className="subtitle">A common goal </div>
                <div className="wrapper-team">
                    <div className="team1">
                        <div className="profile">
                            <img src={e1} alt="e1" />
                            <div className="name">
                                Maxime Dizier 
                                <div className="post"> Web Dev</div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e2} alt="e1" />
                            <div className="name">
                                Olivier Cretot
                                <div className="post"> Embarqued </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e3} alt="e1" />
                            <div className="name">
                                Théo Jeanningros
                                <div className="post"> Database </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e4} alt="e1" />
                            <div className="name">
                                Bryan Fortin 
                                <div className="post"> Embarqued </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e5} alt="e1" />
                            <div className="name">
                                Francois Machere
                                <div className="post"> IOS dev </div>
                            </div>
                        </div>

                    </div>
                    <div className="team2">
                    <div className="profile">
                            <img src={e6} alt="e1" />
                            <div className="name">
                                Guillaume Mihoubi
                                <div className="post"> CEO </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e7} alt="e1" />
                            <div className="name">
                                Hugo Chantelot
                                <div className="post"> Markeing Intern </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e8} alt="e1" />
                            <div className="name">
                                Macéo Bonalair
                                <div className="post"> Marketing </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e9} alt="e1" />
                            <div className="name">
                                Julien Dolle
                                <div className="post"> Database </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
                <a href="https://www.facebook.com/K-air-110057077526665" target="_blank">
                     <img src={fbb} style={{width: "100%"}} alt="e1" />
                </a>
            </div>
            <div style={{marginLeft: "6%", marginTop: "3%"}}classname="ship">
                <img classname="ship"src={ship} alt="zebi"></img>
            </div>

            <div>
                     <img style={{width: "100%"}}src={footer} alt="zebi2"></img>
            </div>
            </div>

            
        );
    }
}

export default valeurs;