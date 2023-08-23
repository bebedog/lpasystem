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