import React from 'react'
import './deleteButton.css'

const DeleteButton = ({data, deleteItem}) => {

    const elements = data.map((item) => {
        const {id, label} = item;
        return (
            <option key={id}
            value={id}
            id={id}
            className="list-group-item"
            onMouseEnter={(e) => deleteItem(e.target.value)}
            >
            {label}
            </option>
        )
    });

    return (
        <>
        <select className="deleteBtn" onChange={(e) => deleteItem(e.target.value)}>
        <option default>Выберите пункт, который нужно удалить</option>
            {elements}
            
        </select>
    </>
        
    )
}
export default DeleteButton