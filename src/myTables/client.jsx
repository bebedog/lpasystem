/*
================================================================================
FILE        : client.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : jsx component that displays the client table
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
04 Aug 2023     Sigaya      Revised layout, used Ant Design library
15 Aug 2023     Sigaya      Modified client table's filter and sort function
================================================================================
*/

import React, {useState, useRef} from 'react'
import {Button, Input, Space, Table} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import mockaroo from "../myHelpers/mycompanydatabase";
import {clear} from "@testing-library/user-event/dist/clear";


/*
*
* The error "Rendered more hooks than during the previous render" occurs when we
* conditionally call a hook or return early before all hooks have run. To solve the error,
* move all hooks at the top level of the function component and don't use hooks inside conditions.
*
* */

/*
================================================================================
FUNCTION    : ClientTable
DESCRIPTION : Displays the client table.
ARGUMENTS   : none
RETURNS     : Table object
================================================================================
*/
function ClientTable() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
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
            dataIndex: "email_address",
            key: "email_address",
            width: 350,
            ...getColumnSearchProps("email_address")
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
            title: "End of Contract",
            dataIndex: "contract_end",
            key: "contract_end"
        }
    ]

    const onChange = (sorter) => {
        console.log("parameters", sorter)
    }

    return (
        <>
            <Table
                columns={clientColumns}
                dataSource={mockaroo}
                //set pagination option to bottom center
                pagination={{position: ["bottomCenter"]}}
                size = "large"
                bordered
                scroll = {{x:1300}}
                onChange = {onChange}
            />
        </>
    )
}

export default ClientTable;