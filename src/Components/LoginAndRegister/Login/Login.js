import React, { useState, useContext, useEffect } from 'react';

import { Input, Button, Form } from 'antd';
import './Login.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);
  



  
  if (!loggedIn) {
  return (
<div className="wrapper-all">
    <div className="loginForm">
      <Form>
        <h1 className="loginTitle">Se connecter</h1>
        <div className="mailAdressTitle">Adresse e-mail</div>
        <div className="setEmail">
          <Input
            value={email}
            onChange={event => setEmail(event.target.value)}
            autocomplete="username"
          />
        </div>
        <div className="passwordTitle">Mot de passe</div>
        <div className="setPassword">
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Merci de bien vouloir entrer votre mot de passe',
              },
            ]}
          >
          <Input.Password
            value={password}
            onChange={event => setPassword(event.target.value)}
            autocomplete="current-password"
          />
          <div className="LoginButtonForm">
            <Button>Se connecter</Button>
          </div>

          </Form.Item>
        </div>
      </Form>

    </div>

    </div>
  );
  }
  else {
    return (null);
  }
};