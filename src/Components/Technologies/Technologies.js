import React, { Component } from 'react';
import "./Technologies.scss";
import i1 from "../images/filtres.png";
import i2 from "../images/housse.png";
import i3 from "../images/sac.png";
import logo from "../images/logo page.png";
import footer from "../images/footer.png";
import ship from "../images/ship.png"
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
                    Produits
                </div>
                <div>
                    Produits
                </div>
                <div className="pro">
                        <img src={logo} style={{width: "100%", marginTop: "-200px"}}alt="zebi"></img>
                    </div>

                <video style={{width: "100%"}} className='videoTag' autoPlay loop muted>
                     <source src={sample} type='video/mp4' />
                </video>
                <div className="flex">
                    <div className="flex1">
                    <h1>Obtenez l'application</h1>
                    <br/>
                    L'application mobile KAIR est disponible en exclusivité avec votre masque.
                    <br/><br/>
                    Elle vous permet de suivre en temps réel l'usure de votre filtre pour le remplacer au bon moment.
                    <br/><br/>
                    Quand vous remplacez votre filtre, un processus de vérification sera enclenché en scannant un QRCode unique au sein de votre application mobile.
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
// import React, { Component } from 'react';
// import "./Technologies.scss"
// import sample from '../images/trailer.mp4';

// class Technologies extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { transparent: false }
//       }
//     render() {
//         if (this.state.transparent === false ) {
//             console.log("laaa")
//             localStorage.setItem("trans", true)
//             this.setState({transparent: true})
//         }
//         return (
//             <div>
//             {/* <div className="techno-wrapper">
//                 Techno
//             </div>
//             <div>
//                 Techno
//             </div> */}
//             <div >
//                 <div className="textappli">
//                 Obtenez l'application
// Notre application mobile
// L'application mobile R-PUR est disponible en exclusivité avec votre masque R-PUR Nano® 

// Elle vous permet de suivre en temps réel l'usure de votre filtre pour le remplacer au bon moment.

// Chaque filtre est livré accompagné d'un certificat unique pour valider son authenticité.

// Quand vous remplacez votre filtre, un processus de vérification sera enclenché en scannant un QRCode unique au sein de votre application mobile.
//                 </div>
//                 {/* <video style={{width: "100%"}} className='videoTag' autoPlay loop muted>
//                     <source src={sample} type='video/mp4' />
//                 </video> */}
//             </div>
//             </div>
//         );
//     }
// }

// export default Technologies;