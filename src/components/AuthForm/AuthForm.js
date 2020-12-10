import React from 'react';
import { Redirect } from "react-router-dom";
import { RegisterButton } from '../Ui/Buttons/Buttons';
import { Form, FormTitle, Label, Span, Input } from './styles';
import { signInWithGoogle, auth } from '../../firebase/config';

const AuthForm = ({currentUser, setCurrentUser}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
          auth.signInWithEmailAndPassword(email.value, password.value)
          .catch(error => alert(error))
          .then(alert(`Welcome ${email.value.trim()}`));
          setCurrentUser({ 
            auth: true, 
            name: email.value.trim()
        });
        } catch (error) {
          alert(error);
        }
      };

      if (currentUser.auth) {
        return <Redirect to="/" />
      }

    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>Sign In</FormTitle>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type='email' />

            <Label htmlFor="password">Password</Label>
            <Input name="password" type='password' />

            <RegisterButton>Sign In</RegisterButton>

            <Span>or sign in with</Span>

            <RegisterButton onClick={signInWithGoogle}>Google</RegisterButton>
        </Form>
    )
}

export default AuthForm;
