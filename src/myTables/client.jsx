/**
 * ================================================================================
 * FILE        : client.jsx
 * AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : jsx component that displays the client table
 * COPYRIGHT   : 31 July 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 31 July 2023    Amodia      Creation of file
 * 04 Aug 2023     Sigaya      Revised layout, used Ant Design library
 * 15 Aug 2023     Sigaya      Modified client table's filter and sort function
 * ================================================================================
 */

import React, {useState, useRef, useEffect} from 'react'
import {Button, Input, Space, Table, Row, Popconfirm, message, Col} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {clear} from "@testing-library/user-event/dist/clear";
import ViewClientModal from './amodiaComponents/ViewClientModal'
import EditClientModal from './amodiaComponents/EditClientModal'
import AddNewClientModal from './amodiaComponents/AddNewClientModal';
import {deleteEntry, fetchClients} from '../myHelpers/db';


/*
*
* The error "Rendered more hooks than during the previous render" occurs when we
* conditionally call a hook or return early before all hooks have run. To solve the error,
* move all hooks at the top level of the function component and don't use hooks inside conditions.
*
* */

/**
 * ================================================================================
 * FUNCTION    : ClientTable
 * DESCRIPTION : Displays the client table.
 * ARGUMENTS   : none
 * RETURNS     : Table object
 * REVISION HISTORY
 * Date:            By:        Description:
 * 02 Aug 2023      Amodia     Creation of function
 * ================================================================================
 */
function ClientTable() {
    //this state stores and modifies the searched text.
    const [searchText, setSearchText] = useState('');
    //this state renders a new column based on the search query.
    const [searchedColumn, setSearchedColumn] = useState('');
    //this state holds the records of the selected client.
    const [selectedClient, setSelectedClient] = useState(null)
    //this state is used for the viewClient modal.
    const [isViewVisible, setViewVisible] = useState(false)
    //this state is used for the editClient modal.
    const [isEditVisible, setEditVisible] = useState(false)
    //this state is used for the createNewClient modal.
    const [isCreateNewVisible, setCreateNewVisible] = useState(false)
    // this state contains all the data of the query.
    const [myClients, setMyClients] = useState([])
    // this state is to display a loading spinner to the table whenever an update happens.
    const [isLoading, setLoading] = useState(true)
    // this useRef is for the search inputs.
    const searchInput = useRef(null);
    //this message component displays the message box for the PopConfirm component.
    const [messageApi, contextHolder] = message.useMessage()

    /**
     * ================================================================================
     * FUNCTION    : MsgBox
     * DESCRIPTION : Shows the message box popup message.
     * ARGUMENTS   : type    - indicator if success, warning, or danger
     *               content - response
     * RETURNS     : void
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Amodia     Creation of function
     * ================================================================================
     */
    const MsgBox = (type, content) => {
        messageApi.open({
            type: type,
            content: content
        })
    }

    // Whenever something changes (a CRUD update or something),
    // The webapp needs to re-render the content of the table.
    // We can do that with the help of the useEffect webhook.
    useEffect(() => {
        setLoading(true)
        fetchClients().then((data) => {
            setMyClients(data)
            setLoading(false)
        })
    }, [])

    const handleCreateNewClicked = () => {
        setCreateNewVisible(true)
    }

    /**
     * ================================================================================
     * FUNCTION    : handleActionClick
     * DESCRIPTION : This method handles the event when either the VIEW or EDIT options are clicked.
     * ARGUMENTS   : event - user-generated action
     * RETURNS     : void
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Amodia     Creation of function
     * ================================================================================
     */
    const handleActionClick = (event) => {
        // Take the data content of the column.
        const mySelectedClient = event.target.getAttribute('data')
        setSelectedClient(mySelectedClient)

        // Since this function is used by three buttons,
        // We need to make a switch statement to determine which button was pressed.
        const handler = event.target.getAttribute('handler')
        switch (handler) {
            case "view":
                setViewVisible(true)
                break;
            case "edit":
                setEditVisible(true)
                break;
        }
    }

    /**
     * ================================================================================
     * FUNCTION    : handleViewCancel
     * DESCRIPTION : This method handles the event when "Cancel" buttons are pressed on the VIEW modal.
     * ARGUMENTS   : none
     * RETURNS     : void
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Amodia     Creation of function
     * ================================================================================
     */
    const handleViewCancel = () => {
        setViewVisible(false)
    }

    /**
     * ================================================================================
     * FUNCTION    : handleEditCancel
     * DESCRIPTION : This method handles the event when the "Edit" button is pressed on the VIEW modal.
     * ARGUMENTS   : none
     * RETURNS     : void
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Amodia     Creation of function
     * ================================================================================
     */
    const handleEditCancel = () => {
        setEditVisible(false)
    }

    /**
     * ================================================================================
     * FUNCTION    : handleDelete
     * DESCRIPTION : This method handles the event where the Confirm button was clicked
     *               on the PopConfirm component for deletion.
     * ARGUMENTS   : none
     * RETURNS     : Promise - asynchronous, object
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Amodia     Creation of function
     * ================================================================================
     */
    const handleDelete = () => {
        const myClient = JSON.parse(selectedClient)
        console.log('Deleting the client...')
        return new Promise((resolve, reject) => {
            deleteEntry(myClient.clinic_id)
                .then(response => {
                    console.log(response)
                    fetchClients()
                        .then(res => {
                            setMyClients(res)
                            resolve(MsgBox('Success!', response))
                        })
                })
                .catch(error => reject(error))
        })
    }

    /**
     * ================================================================================
     * FUNCTION    : handleSearch
     * DESCRIPTION : This method sets the searched input from the user to the searched column.
     * ARGUMENTS   : None
     * RETURNS     : None
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Sigaya     Creation of function
     * ================================================================================
     */
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    /**
     * ================================================================================
     * FUNCTION    : handleReset
     * DESCRIPTION : This method sets the searched column to its default setting.
     * ARGUMENTS   : None
     * RETURNS     : None
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Sigaya     Creation of function
     * ================================================================================
     */
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    /**
     * ================================================================================
     * FUNCTION    : getColumnSearchProps
     * DESCRIPTION : This method gets the searched text inputted by the user.
     * ARGUMENTS   : None
     * RETURNS     : None
     * REVISION HISTORY
     * Date:            By:        Description:
     * 15 Aug 2023      Sigaya     Creation of function
     * ================================================================================
     */
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters({
                                //change the "confirm" value to reset the filter after clicking the reset button.
                                confirm: true,
                                //closeDropdown will close the search dropdown box after clicking the reset button.
                                closeDropdown: true
                            }) && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>

                    {/*<Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                //change here if you want to close the dropdown after clicking "filter"
                                closeDropdown: true,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>*/}

                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const clientColumns = [
        {
            title: "Clinic Name",
            dataIndex: "clinic_name",
            key: "name",
            ...getColumnSearchProps("clinic_name"),
            //Clinic Name column width
            width: 350,
            //for the gray highlight
            responsive: ['md'],
            //for the sorting option
            //https://stackoverflow.com/questions/55808128/how-to-sort-a-table-in-alphabetical-order-with-antd
            sorter: (a, b) => a.clinic_name.localeCompare(b.clinic_name),
            sortDirections: ['ascend', 'descend']
        },
        {
            title: "Email Address",
            // dataIndex: "email_address",
            dataIndex: "email",
            key: "email",
            width: 350,
            //Note: this will throw an error if the content is empty/null
            ...getColumnSearchProps("email")
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            ...getColumnSearchProps("address")
        },
        {
            title: "Start of Contract",
            dataIndex: "contract_start",
            key: "contract_start"
        },
        {
            title: "Audit Date",
            dataIndex: "audit_date",
            key: "audit_date"
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            width: 150,
            render: (_, records) => {
                return (
                    <Row justify={'end'}>
                        <Space>
                            <a handler={"view"}
                               style={{color: "blue"}}
                               onClick={handleActionClick}
                               data={JSON.stringify(records)}
                               onCancel={handleViewCancel}
                            >View</a>

                            <a handler={"edit"}
                               onClick={handleActionClick}
                               data={JSON.stringify(records)}
                               onCancel={handleEditCancel}
                            >Edit</a>

                            <Popconfirm
                                title='Delete Clinic Data'
                                description='This is a permanent action, and the data associated with this clinic will be lost forever. Proceed?'
                                onConfirm={handleDelete}
                            >
                                <a handler={"delete"}
                                   style={{color: "red"}}
                                   onClick={handleActionClick}
                                   data={JSON.stringify(records)}>Delete</a>
                            </Popconfirm>
                        </Space>
                    </Row>
                )
            }
        }
    ]

    const onChange = (sorter) => {
        console.log("parameters: ", sorter)
    }

    return (
        <>
            {contextHolder}
            <Row
                style={{width: '100%', background: '#F5F5F5', paddingBottom: 15, paddingRight: 15}}
                justify={'end'}>
                <Button type='primary' onClick={handleCreateNewClicked}>Add New Client</Button>
            </Row>
            <Table
                columns={clientColumns}
                // dataSource={mockaroo}
                dataSource={myClients}
                //set pagination option to bottom center
                pagination={{position: ["bottomCenter"]}}
                size="large"
                bordered
                scroll={{x: 1300}}
                onChange={onChange}
                loading={isLoading}

            />
            {selectedClient != null ?
                <>
                    <ViewClientModal
                        open={isViewVisible}
                        selectedClient={selectedClient}
                        onCancel={handleViewCancel}
                    />
                    <EditClientModal
                        open={isEditVisible}
                        selectedClient={selectedClient}
                        onCancel={handleEditCancel}
                    />
                </> : null}
            <AddNewClientModal
                open={isCreateNewVisible}
                onOk={null}
                onCancel={() => {
                    setCreateNewVisible(false)
                }}/>
        </>
    )
}

export default ClientTable;