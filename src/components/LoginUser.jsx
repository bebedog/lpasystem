/**
 * ================================================================================
 * FILE        : LoginUser.jsx
 * AUTHORS     : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : JSX file that is used to display the Log In form.
 * COPYRIGHT   : 22 Aug 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of file
 * 24 Aug 2023      Sigaya     Added asynchronous function: action()
 * ================================================================================
 */
import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import {json, Link, redirect} from "react-router-dom";

/**
 * ================================================================================
 * FUNCTION    : LoginForm
 * DESCRIPTION : Presents a Login Form for the user.
 * ARGUMENTS   : None
 * RETURNS     : Form - component
 * REVISION HISTORY
 * Date:            By:        Description:
 * 22 Aug 2023      Sigaya     Creation of function
 * ================================================================================
 */
function LoginForm() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            method="POST"
            align="center"
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/register">register now!</Link>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;

//this looks like the expanded version of the form action attribute in html
export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
    //gets hold of the data that was submitted with the form
    const data = await request.formData();

    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: "Unsupported Mode! Invalid User Input."}, {status: 422})
    }

    const authData = {
        username: data.get('username'),
        password: data.get('password')
    }
    // fetch("/clients" + ,mode);
    const response = await fetch('/clients' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });


    if (response.status === 422 || response.status === 401) {
        return response;
    }
    if (!response.ok) {
        throw json({message: 'Could not authenticate user.'}, {status: 500})
    }

    return redirect('/');
}