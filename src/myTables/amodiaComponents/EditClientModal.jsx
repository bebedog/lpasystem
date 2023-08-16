/*
================================================================================
FILE        : EditClientModal.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JSX file that edits the clinic details selected by the user.
COPYRIGHT   : 16 Aug 2023
REVISION HISTORY
Date: 			By: 		Description:
16 Aug 2023     Amodia      Creation of file
================================================================================
*/

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