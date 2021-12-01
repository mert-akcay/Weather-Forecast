import React from 'react'
import { Select } from "antd";
import "antd/dist/antd.css";
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentSelected} from '../../redux/weatherDataSlice'

const { Option } = Select;

function Input(data) {
    const dispatch = useDispatch();
    const currentSelected = useSelector(state => state.currentSelected)

    const handleChange = (e) => {
        dispatch(setCurrentSelected(e))
    }

    return (
        <div>
            <Select
                showSearch
                style={{ width: '50%', marginTop: '3vh'}}
                placeholder="Select a person"
                onChange={handleChange}
                value={currentSelected}
                defaultValue={'İstanbul'}
            >
                {
                    data.data.map( element=>{
                        return <Option key={element.id} value={element.name}>{element.name}</Option>
                    })
                }
            </Select>
        </div>
    )
}

export default Input
