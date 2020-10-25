import React, { Component } from 'react';
import "./Produit.scss";
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
import ReactStars from 'react-stars'
import fill from "../images/fill.png"
class Produit extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isBuy: false,
            transparent: false,

        }
    }
    handleClick = () =>{
        this.setState({isBuy: true})
    }

    render() {
      
        
        if (this.state.isBuy === false) {
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
                <div className="main-product">
                    <img src={Mask} style={{width: "30%", marginTop: "-200px",marginLeft: "35%"}}alt="zebi"></img>

                </div>
                <div className="text">The mask</div>
                <div style={{width: "20%", marginLeft: "40%"}}><Button onClick={this.handleClick}>Get it now</Button></div>
                <div className="products">
                    
                    <div className="product">
                        <img src={i1} style={{width: "100%"}}alt="zebi"></img>
                        <div className="text">K-air filters</div>
                        <div className="price">28€</div>
                    </div>
                    <div className="product">
                        <img src={i2} style={{width: "100%"}} alt="zebi"></img>
                        <div className="text">Transportable case </div>
                        <div className="price">30€</div>
                    </div>
                    <div className="product">
                        <img src={i3} style={{width: "100%"}} alt="zebi"></img>
                        <div className="text">Cleaning bag</div>
                        <div className="price">5€</div>
                    </div>

                </div>
                <div className="pro">
                        <img src={ship} style={{width: "60%", marginLeft: "20%"}}alt="zebi"></img>
                </div>
                <div className="pro">
                        <img src={footer} style={{width: "100%"}}alt="zebi"></img>
                </div>
            </div>
        );
        }
        else {
            return (
                <div>
                <div className="produit-wrapper">
                    Products
                </div>
                <div>
                    Products
                </div>
                <div className="main-product">

                    <div className="m1">
                        <img src={Mask} style={{width: "100%",marginLeft: "6%"}}alt="zebi"></img>
                    </div>
                    <div className="m2">
                    <div>
                        <h1>MASK KAIR</h1>
                    </div>
                    <div className="stars">
                        <div className="s">
                        <ReactStars count={5} value={4}size={24} color2={'#ffd700'} />
                        </div>
                        <div>
                            <h1>499.99€</h1>
                        </div>

                    </div>
                    <div style={{marginBottom: "50px"}}>
                    The new range of anti-pollution masks: light and more breathable.
                    A one-size-fits-all mask with a built-in filter.
                    Developed and made in France
                    </div>
                    <Button>Buy</Button>
                    </div>


                </div>
            </div>
            )

 
        }
    }
}

export default Produit;