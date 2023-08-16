/*
================================================================================
FILE        : AddNewClientModal.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JSX file that adds a new client to the database.
COPYRIGHT   : 16 Aug 2023
REVISION HISTORY
Date: 			By: 		Description:
16 Aug 2023     Amodia      Creation of file
================================================================================
*/

import { Form, Input } from 'antd'
import Modal from 'antd/es/modal/Modal'
import React from 'react'

const AddNewClientModal = ({ open: open, onOk: onOK, onCancel: onCancel }) => {
    return (
        <Modal
            open={open}
            title={"Add New Client"}
            onCancel={onCancel}>


            <Form
                labelCol={{ span: 5 }}>
                <Form.Item
                    label="Clinic Name"
                    name="clinic_name" 
                    rules={[
                        {
                            required: true, 
                            message: 'Please enter a valid clinic name!'
                        }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email'
                        }
                    ]}>
                    <Input />
                </Form.Item>

            </Form>

        </Modal>
    )
}

export default AddNewClientModal