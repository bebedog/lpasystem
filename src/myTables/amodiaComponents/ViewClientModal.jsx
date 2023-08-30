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

import React from 'react'
import {Modal, Descriptions} from 'antd'
import dayjs from 'dayjs'

const ViewClientModal = ({selectedClient: myClient, open: open, onCancel: onCancel}) => {
    const client = JSON.parse(myClient)

    //put the column contents in separate variables because the Descriptions component
    //doesn't accept JSON accessing for some reason
    const clientID = client.clinic_id;
    const clientEmail = client.email;
    const clientStartContract = dayjs(client.contract_start).format('MMM DD, YYYY')
    const clientEndContract = dayjs(client.audit_date).format('MMM DD, YYYY')

    const viewClientItems = [
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
    ]


    return (
        <Modal
            open={open}
            // title={client.clinic_name}
            onCancel={onCancel}>
            <Descriptions
                title={"Full Details for " + client.clinic_name}
                bordered
                layout="vertical"
                size="small"
                column={2}
                items={viewClientItems}
            />
        </Modal>
    )
}

export default ViewClientModal