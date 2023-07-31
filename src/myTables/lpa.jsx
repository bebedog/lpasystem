import { render } from '@testing-library/react'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

function lpaTable() {
    return (
        <>
            <Container className='mt-3' style={{width: "70%"}}>
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
            </Container>
        </>
    )
}

export default lpaTable