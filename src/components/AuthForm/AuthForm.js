import React from 'react';
import { Redirect } from "react-router-dom";
import { RegisterButton } from '../Ui/Buttons/Buttons';
import { Form, FormTitle, Label, Span, Input } from './styles';
import { signInWithGoogle, auth } from '../../firebase/config';

const AuthForm = ({ setCurrentUser }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        auth.signInWithEmailAndPassword(email.value, password.value)
        .then((user) => setCurrentUser({
            auth: true,
            name: user.user.email
        }))
        .catch((error) => alert(error))
    };

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
