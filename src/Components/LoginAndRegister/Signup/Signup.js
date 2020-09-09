import React, { useState, useContext, useEffect } from 'react';
import { Input, Button, Form } from 'antd';
import './Signup.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmSecondPassword, confirmPassword] = useState('');
  const [isButtonPressed, changeButtonStatus] = useState(false);
  const [verificationCode, setverificationcod] = useState('');
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState('');
  const [error, seterror] = useState('');
  const [connexionError, setConnexionError] = useState(false);



  if (!status) {
    return (
      <div className="signupForm">
        <h1 className="signupTitle">S'inscrire</h1>
        <Form>
          <div className="mailAdressTitleSignup">Adresse e-mail</div>
          <div className="setEmailSignup">
            <Input
              value={email}
              onChange={event => setEmail(event.target.value)}
              autocomplete="username"
            />
          </div>
          <div className="passwordTitleSignup">Mot de passe</div>
          <div className="setPasswordSignup">
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
            autocomplete="new-password"
          />
          <div className="passwordConfirmSignup">Confirmer le mot de passe</div>
          <Input.Password
            value={confirmSecondPassword}
            onChange={event => confirmPassword(event.target.value)}
            autocomplete="new-password"
          />
          {/* {isButtonPressed && checkPasswords() === "passwordDiff" ? <div className="passwordDiff">Les mots de passe sont différents</div> : null}
          {connexionError && error === "UsernameExistsException" ? <div className="connexionError">Cette e-mail est deja utilisée</div> : null}
          {connexionError && error === "InvalidParameterException" ? <div className="connexionError">Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial</div> : null} */}
          <div className="SignupButtonForm">
            <Button>S'inscrire</Button>
            </div>

            {isButtonPressed && !error ? <div className="registerDoneWithCode">Votre demande d'inscription à bien été prise en compte, vous allez recevoir un mail de confirmation lorsque votre demande sera acceptée.</div> : <div></div>}

          </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
  else {
    return (null);
  }
};
