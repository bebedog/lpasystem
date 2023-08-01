import { render } from '@testing-library/react'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import db, { lpas } from '../myHelpers/mycompanydatabase'

function createDataRow(props) {
    return (
        <Row>
            <Col>
                {props.id}
            </Col>

            <Col>
                {props.first_name} {props.last_name}
            </Col>

            <Col>
                {props.email}
            </Col>
        </Row>
    )
}

function lpaTable() {


    return (
        <>
            <Container className='mt-3' style={{ width: "70%" }}>
                <h3 className='text-center'>LPA View</h3>
                <Row>
                    <Col>
                        <p>id</p>
                    </Col>

                    <Col>
                        <p>LPA Name</p>
                    </Col>

                    <Col>
                        <p> E-mail Address</p>
                    </Col>
                </Row>
                {lpas.map(obj => createDataRow(obj))}
            </Container>
        </>
    )
}

export default lpaTable