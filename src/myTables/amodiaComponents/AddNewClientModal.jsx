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