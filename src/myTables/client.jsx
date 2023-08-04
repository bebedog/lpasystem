/*
================================================================================
FILE        : client.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the client table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
04 Aug 2023     Sigaya      Revised layout, used Ant Design library
================================================================================
*/

import React, {useState} from 'react'
import mockaroo from "../myHelpers/mycompanydatabase";
import {Table} from 'antd';

const columns = [
    {
        title: "Clinic Name",
        dataIndex: "clinic_name",
        key: "name"
    },
    {
        title: "Email Address",
        dataIndex: "email_address",
        key: "email_address"
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Start of Contract",
        dataIndex: "contract_start",
        key: "contract_start"
    },
    {
        title: "End of Contract",
        dataIndex: "contract_end",
        key: "contract_end"
    }
]


function ClientTable() {

    return (
        <>
            <Table columns={columns} dataSource={mockaroo}/>
        </>
    )
}

export default ClientTable