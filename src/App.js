import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import AuthForm from './components/AuthForm';
import Container from './components/Ui/Container/Container';
import Home from './pages/Home';

const App = () => {
    const [currentUser, setCurrentUser] = useState({
        auth: false,
        name: null
    });

    useEffect(() => {
        if (currentUser.auth) {
            return <Redirect to="/" />
          }
    }, [currentUser]);

    return (
        <>  
            <Header 
                name={currentUser.name}
                auth={currentUser.auth}
                setCurrentUser={setCurrentUser}
            />
            {currentUser.auth ?
                <Router>
                    <Route exact path='/' component={Home}/>
                </Router>
                :
                <Router>
                    <Route exact path='/'>
                        <Container
                            display='flex'
                            justify='space-around'
                            marginTop='20px'
                        >
                            <RegisterForm 
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                            />
                            <AuthForm 
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                            />
                        </Container>
                    </Route>  
                </Router>
            }    
        </>
    )
};

export default App;
