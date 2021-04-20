import React, { useState } from 'react'
import { Menu, Input, Dropdown } from 'antd';
import { FolderAddFilled, SearchOutlined, DownOutlined, UnorderedListOutlined, TableOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";

import styles from '../css/ActionBar.module.css'
import { addFolderToFileData } from "../store/actions/fileData";


function ActionBar() {

    const { rightAlign, centered } = styles

    const [listGrouping, setListGrouping] = useState(true)

    const dispatch = useDispatch()

    const internalStyles = {
        menuItem: {
            borderBottomStyle: 'none',
            color: 'black',
        },
        downIcon: {
            fontSize: 8,
        },
    }

    return (
        <Menu mode="horizontal">
            <Menu.Item 
                key="search" 
                style={internalStyles.menuItem}>
                <Input 
                    allowClear
                    placeholder='Search'
                    prefix={<SearchOutlined/>}/>
            </Menu.Item>
            <Menu.Item
                style={internalStyles.menuItem}
                key="options"
                className={rightAlign}>
                <div className={centered}>
                        <div>
                            Options
                        </div>
                        <DownOutlined style={internalStyles.downIcon} />
                </div>
            </Menu.Item>
            <Menu.Item
                key="tableOutlined"
                className={rightAlign}
                onClick={()=>setListGrouping(false)}
                style={{
                    ...internalStyles.menuItem,
                    color: listGrouping ? 'black' : '#1890ff'
                }}>
                <TableOutlined />
            </Menu.Item>
            <Menu.Item
                key="unorderedListOutlined"
                className={rightAlign}
                onClick={()=>setListGrouping(true)}
                style={{
                    ...internalStyles.menuItem,
                    color: listGrouping ? '#1890ff' : 'black'
                }}>
                <UnorderedListOutlined />
            </Menu.Item>
            <Menu.Item
                style={internalStyles.menuItem}
                key="actions"
                className={rightAlign}>
                    <div className={centered}>
                        <div>
                            Actions
                        </div>
                        <DownOutlined style={internalStyles.downIcon}/>
                    </div>
            </Menu.Item>
            <Menu.Item
                onClick={()=>dispatch(addFolderToFileData('New'))}
                style={internalStyles.menuItem}
                key="createFolder"
                icon={<FolderAddFilled/>}
                className={rightAlign}>
                Create Folder
            </Menu.Item>
        </Menu>
    )
}

export default ActionBar
