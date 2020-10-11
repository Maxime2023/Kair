import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu,  } from 'antd'
import {UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import Produit from './Components/Produit/Produit'
import Technologies from './Components/Technologies/Technologies'
import Logo from './Components/images/kair logo.png';
import LoginAndRegistration from './Components/LoginAndRegister/LoginAndRegistration';
import Valeurs from './Components/Nos valeurs/valeurs'
import "./App.scss"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isTechno: false }
  }
  render() {
    return (
      <div className="menu">
        <Router>
        <Menu mode={"horizontal"} className="zeub" style={{marginTop: "-30px", padding: "1%", width: "100%"}}>
      <Menu.Item className="jul"  style={{marginRight: "370px"}}>
        {/* <img style={{height: "auto", width: "80px", marginRight: "300px"}}src={Logo}/> */}KAIR
      </Menu.Item>
        <Menu.Item style={{marginRight: "170px"}}>
            <Link to="/Produit"> Les produits</Link>
          </Menu.Item>
          <Menu.Item style={{marginRight: "170px"}}>
            <Link to="/Technologies">
              Technologies
            </Link>
          </Menu.Item>
          <Menu.Item style={{marginRight: "300px"}}>
            <Link to="/valeurs">
              Nos Valeurs
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/user">
              <UserOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <ShoppingOutlined/>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/produit">
            <Produit />
          </Route>
          <Route path="/Technologies">
            <Technologies />
          </Route>
          <Route path="/user">
            <LoginAndRegistration />
          </Route>
          <Route path="/valeurs">
            <Valeurs/>
          </Route>
          <Route path="/">
            <Produit/>
          </Route>
        </Switch>

        </Router>
      </div>
    );
  }
}

export default App;