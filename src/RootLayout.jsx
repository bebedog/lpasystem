/**
 * ================================================================================
 * FILE        : RootLayout.jsx
 * AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : JS file that is used to render the web application with routing.
 * COPYRIGHT   : 22 Aug 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of file
 * ================================================================================
 */

import React from "react";
import {Outlet} from "react-router-dom";
import {Layout, theme} from "antd";
import MainNav from "./components/MainNavigation";

//Instantiate the Header, Content, and Footer to the Layout wrapper
const {
    Header,
    Content,
    Footer
} = Layout;

//Instantiate the Date() class to retrieve the current year for the footer
const currentYear = new Date().getFullYear();

/**
 * ================================================================================
 * FUNCTION    : RootLayout
 * DESCRIPTION : Renders the web application with corresponding route paths.
 * ARGUMENTS   : None
 * RETURNS     : Layout - component
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of function
 * ================================================================================
 */
function RootLayout() {

    {/*useState is where you want this component to remember something.
        useState stores exactly two items from the array.
        React hooks can only be invoked at the top level.
        naming convention: [something, setSomething]
        docs: https://react.dev/learn/state-a-components-memory*/
    }

    //Note: do not put render conditions on conditional statements, as you will encounter rendering errors.
    //Renders should all be loaded at once, and then that's the time you display them accordingly.

    //anonymous variable
    const {
        token: {colorBgContainer}
    } = theme.useToken();

    //App function return
    return (
        <>
            {/*Start with the "canvas". Set the Layout
             vh = viewport height, occupies to the percentage of visible screen height.
             Antd footer style doesn't stay at the bottom solution: https://stackoverflow.com/questions/73234128/antd-footer-style-doesnt-stay-at-the-bottom
            */}
            <Layout className="layout" style={{
                minHeight: "100vh"
            }}>
                {/*Set the Header style and Menu
                The 'sticky' attribute sticks the header to the top of the page
                */}
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky'
                }}>
                    {/*This is where the main navigation bar will be rendered*/}
                    <MainNav/>

                </Header>

                {/*Set the content style. This is where you will display the page contents*/}
                <Content style={{
                    margin: '16px 0'
                }}>

                    <div className="site-layout-content" style={{
                        background: colorBgContainer
                    }}>
                        {/*for the router constant, renders router/page links to the screen.
                        The Outlet function will render the child components defined in App.jsx
                        */}
                        <Outlet/>
                    </div>
                </Content>
                {/*Set the Footer. This is where the copyright will be displayed
                The 'sticky' attribute sticks the footer to the bottom of the webpage */}
                <Footer style={{
                    textAlign: 'center',
                    //position: 'sticky'
                }}>
                    <p>Lasermet Philippines © {currentYear}. Created by Lasermet Philippines.</p>
                </Footer>
            </Layout>
        </>
    )
}

export default RootLayout;