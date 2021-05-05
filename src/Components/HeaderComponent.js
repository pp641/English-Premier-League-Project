import React from 'react'
import {Navbar} from 'react-bootstrap'
function HeaderComponent() {
    return (
        <Navbar fixed ="top" bg="dark" variant="dark">
            <h1 className="jumbotron text-center my-10" style={{fontFamily :"georgia",width : "100%" ,height : "20%"}}>Barclays Premier League</h1>
        </Navbar>
    )
}

export default HeaderComponent
