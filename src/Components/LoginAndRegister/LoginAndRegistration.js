import React, { useState, useContext, useEffect } from 'react';
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Button } from "antd";
import './LoginAndRegistration.scss';


export default () => {
    const [loginPage, setLoginPage] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const changestate = () => {
      setLoginPage(!loginPage)
      return;
    }

    return (
        <div>
          <div>k</div>
          <div> a</div>
          <div>i</div>
          {loginPage ? 
          <div>
            {!loggedIn ?
            <div>
            <Login/>
            <div className="styleAskUserStatus">            <div className="askUserStatus">Pas encore de compte ?</div></div>

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

        </div>
    );
}
