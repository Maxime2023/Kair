import React, { Component } from 'react';
import img1 from "../images/val4.png";
import img2 from "../images/val2.png";
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
import ship from "../images/ship.png"
import footer from "../images/footer.png"

class valeurs extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    Fabriqué en france
                </div>
                <div className="subtitle">
                    Un savoir faire francais de qualité
                </div>
                <div className="wrapper-valeur">
                    <div className="val1">
                        <img src={img1} alt="Logo" />
                        <div className="val1txt">
                            Pour vous, KAIR développe, élabore et fabrique depuis sa création en 2020 tous ses produits en France.
                            Nous tenons à remercier toutes les personnes qui travaillent chaque jour et donnent le meilleur d'elles-mêmes pour protéger votre santé.
                            Nous avons donc sollicité les meilleurs artisans engagés et les ateliers de création les plus pointus de la création à la confection du masque. 
                            Notre objectif : élaborer le produit le plus abouti et le plus qualitatif.
                        </div>
                    </div>
                    <div className="val2">
                        <img src={img2} alt="Logo" />
                        <div className="val2txt">
                            Ainsi, le programme de recherche et développement ainsi que les essais de matériaux ont été réalisés en partenariat avec des ingénieurs de l'Institut National des Arts et Métiers et des laboratoires européens indépendants. 
                            Il est également essentiel pour nous de travailler en collaboration avec les ESAT sur l'emballage de nos produits.
                            Nous pensons qu'il est possible de proposer un produit technologique et innovant qui respecte tous les acteurs, que ce soit dans le choix des matériaux, le processus de fabrication et les conditions de réalisation.
                        </div>
                    </div>
                </div>
                <div className="title">L'equipe</div>
                <div className="subtitle">Un objectif commun</div>
                <div className="wrapper-team">
                    <div className="team1">
                        <div className="profile">
                            <img src={e1} alt="e1" />
                            <div className="name">
                                Maxime Dizier 
                                <div className="post"> Web Développeur</div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e2} alt="e1" />
                            <div className="name">
                                Olivier Cretot
                                <div className="post"> Embarqué </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e3} alt="e1" />
                            <div className="name">
                                Théo Jeanningros
                                <div className="post"> Base de donnée </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e4} alt="e1" />
                            <div className="name">
                                Bryan Fortin 
                                <div className="post"> Embarqué </div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={e5} alt="e1" />
                            <div className="name">
                                Francois Machere
                                <div className="post"> Développeur IOS </div>
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
                                <div className="post"> Stagiaire en Marketing </div>
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
                                <div className="post"> Base de donnée </div>
                            </div>
                        </div>
                    </div>
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