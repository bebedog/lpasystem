/*
================================================================================
FILE        : admin.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the administrator table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
================================================================================
*/

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import db, { lpas } from '../myHelpers/mycompanydatabase'

function adminView() {
    return (
        <Container>
            <h2 className='text-center'>Admin View</h2>
        </Container>
    )
}
export default adminView