/**
 * ================================================================================
 * FILE        : LoginUser.jsx
 * AUTHORS     : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : JSX file that is used to display the Error Page.
 * COPYRIGHT   : 22 Aug 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of file
 * ================================================================================
 */
import React from "react";
import {Button, Result} from 'antd';
import {Link} from "react-router-dom";
function ErrorPage(){
   return( <Result
       status="warning"
       title="The corresponding page could not be found."
       extra={
           <Link to="/client" style={{textDecoration: 'none'}}>Go back to Home</Link>
       }
   />);
}

export default ErrorPage;