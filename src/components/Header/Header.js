import React from 'react';
import { Button } from '../Ui/Buttons/Buttons';
import Container from '../Ui/Container/Container';
import {Block, Title} from './styles';

const Header = ({name, auth, setCurrentUser}) => {

    const logOutHandler = () => {
        setCurrentUser({
            auth: false,
            name: null
        })
    }

    return (
        <Block>
            <Container
                display="flex"
                align="center"
                justify="space-between"
            >
                <Title>Hello {name ? `${name}` : 'user'}</Title>
                {auth ? <Button onClick={logOutHandler}>Log out</Button> : null}
            </Container>
        </Block>
    )
}

export default Header;
