/*
================================================================================
FILE        : lpa.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the Laser Protection Adviser table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
04 Aug 2023     Sigaya      Revised layout, used Ant Design library
================================================================================
*/
import { render } from '@testing-library/react'
import React from 'react'
import { lpas } from '../myHelpers/mycompanydatabase'
import {Table} from 'antd'

/*function createDataRow(props) {
    return (
        <Row>
            <Col>
                {props.id}
            </Col>

            <Col>
                {props.first_name} {props.last_name}
            </Col>

            <Col>
                {props.email}
            </Col>
        </Row>
    )
}*/

const LPAColumns = [
    {
        title: "First Name",
        dataIndex: "first_name",
        key: "first_name"
    },
    {
        title: "Last Name",
        dataIndex: "last_name",
        key: "last_name"
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email"
    },
    {
        title: "Contact Number",
        dataIndex: "contact_number",
        key: "contact_number"
    }
]

function lpaTable() {
    return (
        <>
            {/*<Container className='mt-3' style={{ width: "70%" }}>
                <h3 className='text-center'>LPA View</h3>
                <Row>
                    <Col>
                        <p>id</p>
                    </Col>

                    <Col>
                        <p>LPA Name</p>
                    </Col>

                    <Col>
                        <p> E-mail Address</p>
                    </Col>
                </Row>
                {lpas.map(obj => createDataRow(obj))}
            </Container>*/}
            <Table columns = {LPAColumns} dataSource={lpas}/>
        </>
    )
}

export default lpaTable;
export {LPAColumns};