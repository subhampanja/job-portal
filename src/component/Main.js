import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Shortlisted from './Shortlisted';
import Rejected from './Rejected';
import Header from './Header';
import Body from './Body';
import User from './User';
import Footer from './Footer';


function Main() {
    const [shortListed, setShortListed] = useState([]);
    const [rejected, setRejected] = useState([]);

    const shortlistedChange = (e) => {
        setShortListed([...shortListed, { Image: e.Image, name: e.name, id: e.id }])
    }
    const rejectChange = (e) => {
        setRejected([...rejected, { Image: e.Image, name: e.name, id: e.id }])
    }

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/shortlisted">
                    <Shortlisted data={shortListed} />
                </Route>
                <Route path="/rejected" component={Rejected} >
                    <Rejected  data={rejected} />
                </Route>
                <Route path="/user/:id" component={User} />
                <Route pat="/" exact>
                    <Body shortlist={(e) => shortlistedChange(e)} rejectlist={(e) => rejectChange(e)} />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Main
