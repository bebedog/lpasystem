/*
================================================================================
FILE        : ViewClientModal.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JSX file that views the clinic details selected by the user.
COPYRIGHT   : 16 Aug 2023
REVISION HISTORY
Date: 			By: 		Description:
16 Aug 2023     Amodia      Creation of file
================================================================================
*/

import React, { useState } from 'react'
import { Modal, Space } from 'antd'

const ViewClientModal = ({ selectedClient: myClient, open: open, onCancel: onCancel }) => {
    const client = JSON.parse(myClient)
    return (
        <Modal
            open={open}
            title={client.clinic_name}
            onCancel={onCancel}>
            <Space direction='vertical'>
                <Space direction="horizontal">
                    <p>ID: </p>
                    <p>{client.clinic_id}</p>
                </Space>

                <Space direction="horizontal">
                    <p>Email: </p>
                    <p>{client.email_address}</p>
                </Space>

                <Space direction="horizontal">
                    <p>Contract Start: </p>
                    <p>{client.contract_start}</p>
                </Space>

                <Space direction="horizontal">
                    <p>Contract End: </p>
                    <p>{client.contract_end}</p>
                </Space>
            </Space>
        </Modal>
    )
}

export default ViewClientModal