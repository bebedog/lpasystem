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

    //is this where we put the sending of form content to the backend?
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
            onFinish={onFinish} //antd's version of "onSubmit"
            method="post"
            align="center"
        >
            {/* Username Input Field */}
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true, //indicates that the field is required for input
                        message: 'Please input your username!', //error message if the field is blank
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>

            {/* Password Input Field */}
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true, //indicates that the field is required for input
                        message: 'Please input your password!', //error message if the field is blank
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            {/* Remember Me Checkbox Field */}
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* Forgot Password Hyperlink */}
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>


            <Form.Item>
                {/* Log In Button */}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>

                {/* Register Link */}
                Or <Link to="/register">register now!</Link>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;

