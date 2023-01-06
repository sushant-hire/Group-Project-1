import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
const RouterPart = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default RouterPart