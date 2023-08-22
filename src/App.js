/**
 * ================================================================================
 * FILE        : App.js
 * AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : JS file that is used by the root id to launch the website.
 * COPYRIGHT   : 31 July 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 31 July 2023    Amodia      Creation of file
 * 04 Aug 2023     Sigaya      Revised layouts, used Ant Design library
 * 22 Aug 2023     Sigaya      Changed rendering flow from returning Layout to RouterProvider
 * ================================================================================
 */
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ClientTable from './myTables/client'
import LPATable from './myTables/lpa'
import RootLayout from "./RootLayout";
import AdminView from "./myTables/admin";
import Forbidden from "./myTables/forbidden";
import LoginForm from "./components/Login";

/*
* For the Layout and Menu documentation, go to:
* Layout: https://ant.design/components/layout
* Menu: https://ant.design/components/layout
* */

/**
 * ================================================================================
 * FUNCTION    : Router
 * DESCRIPTION : Router function that is used to render the web application with routing.
 * ARGUMENTS   : None
 * RETURNS     : CreateBrowserRouter - creates routes
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of function
 * ================================================================================
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {path: '/client', element: <ClientTable/>},
            {path: '/lpa', element: <LPATable/>},
            {path: '/admin', element: <AdminView/>},
            {path: '/forbidden', element: <Forbidden/>},
            //!!!! FOR TESTING PURPOSES ONLY. REMOVE IN MAIN NAVIGATION BAR BEFORE DEPLOYMENT !!!!
            {path: '/login', element: <LoginForm/>}
        ]
    }
])

/**
 * ================================================================================
 * FUNCTION    : App
 * DESCRIPTION : Function that the root will execute upon loading.
 * ARGUMENTS   : None
 * RETURNS     : RouterProvider - renders the webpage with routers
 * REVISION HISTORY
 * Date:            By:        Description:
 * 31 July 2023     Amodia     Creation of file
 * 22 Aug 2023      Sigaya     Changed return variable from Layout to RouterProvider
 * ================================================================================
 */
function App() {
    //App function return
    return (
        <>
            <RouterProvider router={router}/>
        </>
);
}

export default App;
