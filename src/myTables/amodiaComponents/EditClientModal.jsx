import React from 'react'
import { Modal } from 'antd'

const EditClientModal = (props) => {
    return (
        <Modal
        title={'Edit Client'}
        open={props.open}
        onCancel={props.onCancel}
        >

        </Modal>
    )
}

export default EditClientModal