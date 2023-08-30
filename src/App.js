/*
================================================================================
FILE        : App.js
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JS file that is used by the root id to launch the website.
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
04 Aug 2023     Sigaya      Revised layouts, used Ant Design library
================================================================================
*/
import React, { useState, useRef } from 'react';
import ClientTable, { clientColumns } from './myTables/client'
import lpaTable from './myTables/lpa'
import forbidden from './myTables/forbidden'
import adminView from "./myTables/admin";
//import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Menu, Layout, theme, Button, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import mockaroo from "./myHelpers/mycompanydatabase.js";
// database helpers
import db from './myHelpers/db'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

/*
* For the Layout and Menu documentation, go to:
* Layout: https://ant.design/components/layout
* Menu: https://ant.design/components/layout
* */

//Instantiate the Header, Content, and Footer to the Layout wrapper
const {
    Header,
    Content,
    Footer
} = Layout;

//Declare the items that the user will click in the navigation bar
//REVISE THIS ONE
const items = [
    {
        label: "Administrator View",
        key: 'admin',
        disabled: true
    },
    {
        label: 'Client View',
        key: 'client',
        //disabled: false
    },
    {
        label: 'LPA View',
        key: 'lpa',
        disabled: true
    },
    {
        label: 'Forbidden',
        key: 'forbid',
        disabled: true
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientTable />
    }
])

//Instantiate the Date() class to retrieve the current year for the footer
const currentYear = new Date().getFullYear();

function App() {
    //How to change content based on Antd menu item: https://stackoverflow.com/questions/52021381/how-to-change-content-based-on-menu-item-click-in-antd-react-ui-library
    const componentSwitch = (key) => {
        switch (key) {
            case "lpa":
                console.log('Clicked ', key);
                return lpaTable()
                break;
            case 'client':
                console.log('Clicked ', key);
                return ClientTable();
                break;
            case 'admin':
                console.log('Clicked ', key);
                return adminView();
                break;
            default:
                console.log('Clicked ', key);
                return forbidden();
                break;
        }
    }

    /*

    useState is where you want this component to remember something.
    useState stores exactly two items from the array.
    React hooks can only be invoked at the top level.
    naming convention: [something, setSomething]
    docs: https://react.dev/learn/state-a-components-memory

     */
    const [mode, setMode] = useState('client');

    //anonymous variable
    const {
        token: { colorBgContainer }
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

                    {/*Change the logo here!*/}
                    {/*<div className={"lasermet-logo"}/>*/}
                    {/*<img src = "https://www.lasermet.com/wp-content/uploads/2023/02/cropped-Lasermet-Logo-800x800-1.jpeg"*/}
                    {/*     alt = "Lasermet Logo"*/}
                    {/*height = "100px"*/}
                    {/*width = "100px"*/}
                    {/*!/>*/}
                    {/*Navigation bar
                    Recommendation: try utilizing react routing (react-router-dom)?
                    */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        onClick={(e) => setMode(e.key)}
                        selectedKeys={mode}
                        items={items}
                    />;
                </Header>

                {/*Set the content style. This is where you will display the page contents*/}
                <Content style={{
                    margin: '16px 0'
                }}>

                    <div className="site-layout-content" style={{
                        background: colorBgContainer
                    }}>
                        {/*This is where the components will be shown after selecting the option on the navbar*/}
                        {/* <div>{componentSwitch(mode)}</div> */}
                        <RouterProvider router={router} />
                        {/* <RouterProvider route={router} /> */}
                        {/* <Outlet /> */}
                    </div>
                </Content>
                {/*Set the Footer. This is where th\e copyright will be displayed
                The 'sticky' attribute sticks the footer to the bottom of the webpage */}
                <Footer style={{
                    textAlign: 'center',
                    //position: 'sticky'
                }}>
                    Lasermet Philippines © {currentYear}. Created by Lasermet Philippines.
                </Footer>
            </Layout>
        </>
    );
}

export default App;
