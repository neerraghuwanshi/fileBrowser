import React from 'react'
import { Menu } from 'antd';
import { FolderFilled, MinusOutlined, FileFilled, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'

import styles from '../css/FolderContent.module.css'
import { deleteFolderFromFileData, updateFileData } from '../store/actions/fileData';


function FolderContent(props) {

    const { rightAlign, deleteIcon } = styles

    const { type, name, index } = props

    const dispatch = useDispatch()

    const fileLocation = useSelector(state => state.fileData.fileLocation)

    const internalStyles = {
        menuItem: {
            borderBottomStyle: 'none',
            color: 'black',
        },
        icon: {
            color: 'grey',
        }
    }

    const UpdateFileData = () => {
        if (type === 'folder'){
            const newLocation = [...fileLocation, name]
            dispatch(updateFileData(newLocation))
        }
    }

    return (
        <Menu mode="horizontal">
            <Menu.Item
                onClick={UpdateFileData}
                style={internalStyles.menuItem}
                icon={
                    type === 'folder' ? 
                        <FolderFilled style={internalStyles.icon} /> : 
                        <FileFilled style={internalStyles.icon} />
                }
                key="folder">
                {name}
            </Menu.Item>
            <Menu.Item
                onClick={() => dispatch(deleteFolderFromFileData(index))}
                style={internalStyles.menuItem}
                key="delete"
                className={`${rightAlign} ${deleteIcon}`}>
                <DeleteOutlined />
            </Menu.Item>
            <Menu.Item
                style={internalStyles.menuItem}
                key="timestamp"
                className={rightAlign}>
                Apr 4, 2021, 3:36 PM &nbsp;&nbsp;&nbsp; <MinusOutlined />
            </Menu.Item>
        </Menu>
    )
}


export default FolderContent