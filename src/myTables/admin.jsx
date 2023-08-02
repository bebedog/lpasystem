/*
================================================================================
FILE        : admin.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the administrator table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
================================================================================
*/

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import db, { lpas } from '../myHelpers/mycompanydatabase'
import { Tooltip, Divider, Space, Button, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons'


const { Paragraph } = Typography

function adminView() {


    async function fetchClientTable() {
        const clients = await fetch("/clients", {
            method: 'post'
        })
        .then(response => response.json())
        .then(json => console.log(JSON.stringify(json, null, 2)))
    }
    return (
        <Container>
            <h2 className='text-center'>Ant Design Overall</h2>
            <Divider />
            <Space wrap>
                <h2>Buttons</h2>
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type='dashed'>Dashed</Button>
                <Tooltip title='buto mo'>
                    <Button type='link'>Link</Button>
                </Tooltip>

                <Button type='primary' shape='circle' disabled></Button>
                <Button type='dashed' shape='round' size='large' disabled>Jerson</Button>
                <Button type='primary' shape='circle' icon={<SearchOutlined />}></Button>
                <Paragraph copyable>This is a copyable text.</Paragraph>
            </Space>


                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula convallis aliquam. Nunc felis ex, rutrum vel dolor id, mattis malesuada ante. Quisque in mollis metus. Nullam malesuada, nulla et viverra molestie, dui turpis pretium nibh, nec aliquam orci felis vel augue. Nam et purus pretium, feugiat turpis eget, laoreet eros. Duis suscipit tellus ac felis sagittis, vel fringilla odio lobortis. Maecenas id ante id odio maximus aliquet vitae nec sapien. Nunc et mi non tellus elementum tincidunt.

                    Donec ullamcorper nibh in ante scelerisque porttitor. In dolor ex, sollicitudin et ornare at, posuere vitae sapien. Cras nisi sem, posuere ut massa et, mattis auctor nunc. Mauris faucibus ligula eu sem lobortis ultrices. Fusce enim leo, pharetra in quam vitae, vulputate elementum quam. Nam bibendum luctus nibh id consectetur. Praesent venenatis sem vitae urna semper, sed rutrum nisl dignissim. Fusce odio justo, rhoncus id consequat vel, gravida et turpis.</p>
                <Divider>Hello World</Divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula convallis aliquam. Nunc felis ex, rutrum vel dolor id, mattis malesuada ante. Quisque in mollis metus. Nullam malesuada, nulla et viverra molestie, dui turpis pretium nibh, nec aliquam orci felis vel augue. Nam et purus pretium, feugiat turpis eget, laoreet eros. Duis suscipit tellus ac felis sagittis, vel fringilla odio lobortis. Maecenas id ante id odio maximus aliquet vitae nec sapien. Nunc et mi non tellus elementum tincidunt.

                    Donec ullamcorper nibh in ante scelerisque porttitor. In dolor ex, sollicitudin et ornare at, posuere vitae sapien. Cras nisi sem, posuere ut massa et, mattis auctor nunc. Mauris faucibus ligula eu sem lobortis ultrices. Fusce enim leo, pharetra in quam vitae, vulputate elementum quam. Nam bibendum luctus nibh id consectetur. Praesent venenatis sem vitae urna semper, sed rutrum nisl dignissim. Fusce odio justo, rhoncus id consequat vel, gravida et turpis.</p>
                    <Tooltip title='click me and watch console!'>
                        <Button type='primary' onClick={fetchClientTable} >Backend</Button>
                    </Tooltip>
        </Container>


    )
}
export default adminView