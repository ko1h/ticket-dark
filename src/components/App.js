import React from 'react'
import { MDBContainer } from 'mdbreact';

import FixedNavbarExample from './NavbarPage'



const App = () => {

    return (
        <div>
            <FixedNavbarExample/>
            <MDBContainer style={{height: 100}} className="text-center mt-5 pt-5">
            </MDBContainer>
        </div>
    )
}

export default App
