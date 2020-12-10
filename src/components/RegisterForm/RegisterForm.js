import React from 'react';
import { Redirect } from "react-router-dom";
import { RegisterButton } from '../Ui/Buttons/Buttons';
import { Form, FormTitle, Input, Label } from './styles';
import { auth } from '../../firebase/config';

const RegisterForm = ({currentUser, setCurrentUser}) => {

    const handleSubmit = (event) => {
        event.preventDefault();    
        const { email, password, confirm } = event.target.elements;
        
        // Simple check for matching password
        for (let i = 0; i < password.value.length; i++) {
            if (password.value[i] !== confirm.value[i]) {
                return alert('password and confirm not match');
            }
        }

        try {
          auth.createUserWithEmailAndPassword(email.value, password.value)
          .catch(error => alert(error))
          .then(alert(`Welcome ${email.value.trim()}`))
          ;      
          setCurrentUser({ 
                auth: true, 
                name: email.value.trim()
            });
          email.value = '';
          password.value = '';
          confirm.value = '';
        } catch (error) {
          alert(error);
        }
      };

      if (currentUser.auth) {
        return <Redirect to="/" />;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>Registration</FormTitle>

            <Label htmlFor='email'>
                Set your email
            </Label>
            <Input name='email' type='email' required/>

            <Label htmlFor='password'>
                Set your password
            </Label>
            <Input name='password' type='password' required/>
            
            <Label htmlFor='confirm'>
                Confirm your password
            </Label>
            <Input name='confirm' type='password' required/>
            <RegisterButton>Register</RegisterButton>
        </Form>
    )
}

export default RegisterForm;
