import React, { Component } from 'react';
import "./Produit.scss";
import i1 from "../images/filtres.png";
import i2 from "../images/housse.png";
import i3 from "../images/sac.png";
import logo from "../images/logo page.png";
import footer from "../images/footer.png";
import ship from "../images/ship.png"
import ReactPlayer from 'react-player'
import sample from '../images/trailer.mp4';
class Produit extends Component {
    render() {
        return (
            <div>
                <div className="produit-wrapper">
                    Produits
                </div>
                <div>
                    Produits
                </div>
                <div className="pro">
                        <img src={logo} style={{width: "100%", marginTop: "-200px"}}alt="zebi"></img>
                    </div>

                <div className="products">
                    <div className="product">
                        <img src={i1} style={{width: "100%"}}alt="zebi"></img>
                        <div className="text">Filtre Kair</div>
                        <div className="price">28€</div>
                    </div>
                    <div className="product">
                        <img src={i2} style={{width: "100%"}} alt="zebi"></img>
                        <div className="text">Etui de transport</div>
                        <div className="price">30€</div>
                    </div>
                    <div className="product">
                        <img src={i3} style={{width: "100%"}} alt="zebi"></img>
                        <div className="text">Sac de lavage</div>
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
}

export default Produit;