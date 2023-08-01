/*
================================================================================
FILE        : client.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the client table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
================================================================================
*/

import { render } from '@testing-library/react'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import mockaroo from "../myHelpers/mycompanydatabase";
import {Space, Table, Children} from 'antd';

const {Column, ColumnGroup} = Table;

function clientTable() {
    return (
        <>
            <Table dataSource={mockaroo}>
                <ColumnGroup title = "List of Clients">
                    <Column title = "id" dataIndex="id" key = "id"/>
                    <Column title = "Clinic Name" dataIndex="clinic_name" key = "clinic_name"/>
                    <Column title = "Email Address" dataIndex="email_address" key = "email_address"/>
                    <Column title = "Address" dataIndex="address" key = "address"/>
                    <Column title = "Start of Contract" dataIndex="contract_start" key = "contract_start"/>
                    <Column title = "End of Contract" dataIndex="contract_end" key = "contract_end"/>
                </ColumnGroup>
            </Table>
        </>
    )
}

export default clientTable