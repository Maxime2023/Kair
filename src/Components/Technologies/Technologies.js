import React, { Component } from 'react';
import "./Technologies.scss";
import i1 from "../images/filtres.png";
import i2 from "../images/housse.png";
import i3 from "../images/sac.png";
import logo from "../images/logo page.png";
import footer from "../images/footer_e.png";
import ship from "../images/ship_e.png"
import ReactPlayer from 'react-player'
import sample from '../images/trailer.mp4';
import Mask from '../images/masssk.png';
import { Button } from "antd"
import phone from '../images/zeuuuub.png'


class Technologies extends Component {
    constructor(props) {
        super(props)
        this.state = { transparent: false }
      }
    render() {
        return (
            <div>
                <div className="produit-wrapper">
                    Products
                </div>
                <div>
                    Products
                </div>
                <div className="pro">
                        <img src={logo} style={{width: "100%", marginTop: "-200px"}}alt="zebi"></img>
                    </div>

                <video style={{width: "100%"}} className='videoTag' autoPlay loop muted>
                     <source src={sample} type='video/mp4' />
                </video>
                <div className="flex">
                    <div className="flex1">
                    <h1>Get the app</h1>
                    <br/>
                    K-air's mobile app is available when you purchase your K-air mask. 
                    <br/><br/>
                    The app allows you to see the current state of your filters to change them when needed.
                    <br/><br/>
                    When filters are replaced, a scanning process will begin using a unique QRCode in the mobile app.
                    </div>
                    <div className="flex2">
                    <img src={phone} style={{width: "50%", marginLeft: "25%"}}alt="zebi"></img>
                    </div>
                </div>
                <div>
                <img src={footer} style={{width: "100%"}}alt="zebi"></img>
                </div>
            </div>
        );
    }
}

export default Technologies;