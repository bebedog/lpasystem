import { render } from '@testing-library/react'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

function clientTable() {
    return (
        <>
            <Container className='mt-3'>
                <h3 className='text-center'>Client View</h3>
            </Container>
        </>
    )
}

export default clientTable