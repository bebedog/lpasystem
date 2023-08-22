/**
 * ================================================================================
 * FILE        : MainNavigation.jsx
 * AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : JSX file that displays the Main Navigation bar.
 * COPYRIGHT   : 22 Aug 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of file
 * ================================================================================
 */

import {Menu} from "antd";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const items = [
    {
        //textDecoration removes the underline in the links
        label: <Link to="/admin" style={{textDecoration: 'none'}}>Administrator View</Link>,
        key: 'admin'
    },
    {
        label: <Link to="/client" style={{textDecoration: 'none'}}>Client View</Link>,
        key: 'client'
    },
    {
        label: <Link to="/lpa" style={{textDecoration: 'none'}}>LPA View</Link>,
        key: 'lpa'
    },
    {
        label: <Link to="/forbidden" style={{textDecoration: 'none'}}>Forbidden</Link>,
        key: 'forbidden'
    },
    {
        //FOR TESTING PURPOSES ONLY. REMOVE BEFORE DEPLOYMENT
        label: <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>,
        key: 'login'
    }
]

/**
 * ================================================================================
 * FUNCTION    : MainNav
 * DESCRIPTION : Presents a navigation bar where it renders the web application
 *               with corresponding route paths.
 * ARGUMENTS   : None
 * RETURNS     : Layout - component
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of function
 * ================================================================================
 */
function MainNav() {
    //sets the selected label in the navigation bar.
    const [selected, setSelected] = useState('client');

    const OnClick = (e) => {
        // console.log("Clicked the " + e + "View");
        setSelected(e.key);
    }
    return (<>
        <Menu
            theme="dark"
            mode="horizontal"
            onClick={OnClick}
            selectedKeys={selected}
            items={items}
        />
    </>)
}

export default MainNav;
