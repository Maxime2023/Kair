import React, { useState, useContext, useEffect } from 'react';
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Button } from "antd";
import './LoginAndRegistration.scss';
import footer from '../images/footer_e.png'
import white from '../images/white.png'

export default () => {
    const [loginPage, setLoginPage] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const changestate = () => {
      setLoginPage(!loginPage)
      return;
    }

    return (
        <div>

          {loginPage ? 
          
          <div>
                                      <div>
                <img src={white} style={{width: "5%"}}alt="zebi"></img>
                </div>
            {!loggedIn ?
            <div>
            <Login/>
            <div className="styleAskUserStatus"><div className="askUserStatus">Pas encore de compte ?</div></div>

            <div className="buttonAskUserStatus"><Button className="AskUserStatus" onClick={changestate}>S'inscrire</Button></div>
            </div>
            :
            <div></div>}
          </div> 
          :
          <div>
            <Signup/>
            <div className="askUserStatus">Vous avez deja un compte ?</div>
            <div className="buttonAskUserStatus"><Button className="AskUserStatus" onClick={changestate}>Se connecter</Button></div>
          </div>
          }
                          <div>
                <img src={footer} style={{width: "100%", marginTop: "100px"}}alt="zebi"></img>
                </div>

        </div>
    );
}
