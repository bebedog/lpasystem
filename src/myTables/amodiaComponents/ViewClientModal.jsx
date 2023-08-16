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

import React, {useState} from 'react'
import {Modal, Space, Descriptions} from 'antd'

const ViewClientModal = ({selectedClient: myClient, open: open, onCancel: onCancel}) => {
    const client = JSON.parse(myClient)

    //put the column contents in separate variables because the Descriptions component
    //doesn't accept it for some reason
    const clientID = client.clinic_id;
    const clientEmail = client.email;
    const clientStartContract = client.contract_start
    const clientEndContract = client.contract_end

    return (
        <Modal
            open={open}
            title={client.clinic_name}
            onCancel={onCancel}>
            {/*<Space direction='vertical'>*/}
            {/*    <Space direction="horizontal">*/}
            {/*        <p>ID: </p>*/}
            {/*        <p>{client.clinic_id}</p>*/}
            {/*    </Space>*/}

            {/*    <Space direction="horizontal">*/}
            {/*        <p>Email: </p>*/}
            {/*        <p>{client.email_address}</p>*/}
            {/*    </Space>*/}

            {/*    <Space direction="horizontal">*/}
            {/*        <p>Contract Start: </p>*/}
            {/*        <p>{client.contract_start}</p>*/}
            {/*    </Space>*/}

            {/*    <Space direction="horizontal">*/}
            {/*        <p>Contract End: </p>*/}
            {/*        <p>{client.contract_end}</p>*/}
            {/*    </Space>*/}
            {/*</Space>*/}
            <Descriptions
                title={"Details for " + client.clinic_name}
                bordered
                width = {1000}
                items={[
                    {
                        key: "1",
                        label: "Clinic ID",
                        children: clientID
                    },
                    {
                        key: "2",
                        label: "Email Address",
                        children: clientEmail
                    },
                    {
                        key: "3",
                        label: "Start Date of Contract",
                        children: clientStartContract
                    },
                    {
                        key: "4",
                        label: "End Date of Contract",
                        children: clientEndContract
                    }
                ]}
            />
        </Modal>
    )
}

export default ViewClientModal