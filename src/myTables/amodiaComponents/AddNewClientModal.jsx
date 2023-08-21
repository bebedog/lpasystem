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

import { Button, DatePicker, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Modal from 'antd/es/modal/Modal'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import CreateNewClient, { createNewClient } from '../../myHelpers/db'


const AddNewClientModal = ({ open: open, onFinish: onFinish, onCancel: onCancel }) => {
    const [form] = Form.useForm()
    const [isLoading, setLoading] = useState(false)

    const formSubmit = () => {
        setLoading(true)
        form.submit()
    }

    const handleSave = ({ "clinic_name": clinic_name, "email": email, address: address, "contract_start": contract_start, "audit_date": audit_date }) => {
        setLoading(true)
        // Create the payload.
        const payload = {
            clinic_name: clinic_name,
            email: email,
            address: address,
            contract_start: dayjs(contract_start).format('YYYY-MM-DD'),
            audit_date: dayjs(audit_date).format('YYYY-MM-DD')
        }

        createNewClient(payload)
            .then((response) => {
                console.log("done! Response: ", response)
                setLoading(false)
                form.resetFields()
                onCancel()
                onFinish()
            })
            .catch(null)

    }

    return (
        <Modal
            open={open}
            title={"Add New Client"}
            onCancel={onCancel}
            footer={[
                <>
                    <Button
                        loading={isLoading}
                        onClick={formSubmit}>Save</Button>
                    <Button onClick={() => {
                        form.resetFields()
                        onCancel()
                    }}>Return</Button>
                </>
            ]}>


            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ offset: 1 }}
                form={form}
                method='post'
                action='/add'
                onFinish={handleSave}>

                <Form.Item
                    label="Clinic Name"
                    name="clinic_name"
                    rules={[{ required: true, message: 'Please enter clinic name.' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: 'email', message: 'Invalid email format!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name='address'
                    label='Address'
                    rules={[{ required: true, message: 'Please enter address!' }]}>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name='contract_start'
                    label='Contract Start:'
                    rules={[{ required: true, message: 'Please enter a valid date!' }]}>
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name='audit_date'
                    label='Audit Date: '
                    rules={[{ required: true, message: 'Please enter a valid date!' }]}>
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default AddNewClientModal