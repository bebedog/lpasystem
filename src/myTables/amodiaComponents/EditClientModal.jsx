/*
================================================================================
FILE        : EditClientModal.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JSX file that edits the clinic details selected by the user.
COPYRIGHT   : 16 Aug 2023
REVISION HISTORY
Date: 			By: 		Description:
16 Aug 2023     Amodia      Creation of file
                Sigaya      Created Edit Client Form
================================================================================
*/

import React, {useState} from 'react'
import {Button, Form, Input, Radio, Modal, DatePicker} from 'antd'

const EditClientModal = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({layout}) => {
        setFormLayout(layout);
    };

    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const SubmitButton = ({ form }) => {
        const [submittable, setSubmittable] = React.useState(false);

        // Watch all values
        const values = Form.useWatch([], form);
        React.useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(
                    () => {
                        setSubmittable(true);
                    },
                    () => {
                        setSubmittable(false);
                    },
                );
        }, [values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable}>
                Submit
            </Button>
        );
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;

    return (
        <Modal
            title={'Edit Client'}
            open={props.open}
            onCancel={props.onCancel}
            layout="vertical"
            initialValues={{
                requiredMarkValue: requiredMark,
            }}

        >

            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{
                    layout: formLayout,
                }}
                onValuesChange={onFormLayoutChange}
                style={{
                    maxWidth: formLayout === 'inline' ? 'none' : 600,
                }}
                autoComplete="off"
            >


                <Form.Item
                    label="Clinic Name"
                    required tooltip="The selected clinic's name."
                >
                    <Input placeholder="Enter Clinic Name"/>
                </Form.Item>
                <Form.Item
                    label="Email Address"
                    required tooltip="The selected clinic's email address."
                >
                    <Input placeholder="Enter Email Address"/>
                </Form.Item>
                <Form.Item
                    label="Address"
                    required tooltip="The selected clinic's present address."
                >
                    <Input placeholder="Enter Address"/>
                </Form.Item>

                <Form.Item label="Start of Contract"
                            required tooltip="The selected clinic's start date of contract.">
                    <DatePicker style ={{width:200}}/>
                </Form.Item>

                <Form.Item label="Audit Date"
                           required tooltip="The selected clinic's auditing date.">
                    <DatePicker style ={{width:200}}/>
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

        </Modal>


    )
}

export default EditClientModal