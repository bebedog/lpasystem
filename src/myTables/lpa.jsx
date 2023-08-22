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


/**
 * ================================================================================
 * FUNCTION    : LPAColumns
 * DESCRIPTION : Creates the columns for the LPA table.
 * ARGUMENTS   : None
 * RETURNS     : Array - contains the columns for the table
 * REVISION HISTORY
 * Date:            By:        Description:
 * 04 Aug 2023      Sigaya     Creation of function
 * ================================================================================
 */
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

/**
 * ================================================================================
 * FUNCTION    : LPATable
 * DESCRIPTION : Renders the LPA table.
 * ARGUMENTS   : None
 * RETURNS     : Table
 * REVISION HISTORY
 * Date:            By:        Description:
 * 31 July 2023     Amodia     Creation of file
 * 04 Aug 2023      Sigaya     Revised to Ant Design Library functions
 * ================================================================================
 */
function LPATable() {
    return (
        <>
            <Table
                columns = {LPAColumns}
                dataSource={lpas}
                //set pagination option to bottom center
                pagination={{position: ["bottomCenter"]}}
                size="large"
                bordered
                scroll={{x: 1300}}
            />
        </>
    )
}

export default LPATable;
export {LPAColumns};