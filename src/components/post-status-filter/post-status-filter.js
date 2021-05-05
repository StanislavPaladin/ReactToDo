import React from 'react'
import './post-status-filter.css'

const  PostStatusFilfer = ({filter, onFilterSelect}) => {
    const btns = [
                {name: 'all', label: 'Все'},
                {name: 'like', label: 'Понравилось'}
    ]

        const buttons = btns.map(({name, label}) => {
            const active = filter === name;
            const clazz = active? 'btn-info' : 'outline-secondary'
            return(
                <button 
                key={name}
                className={`btn ${clazz}`}
                type="button"
                onClick={()=> onFilterSelect(name)}
                >{label}</button>
            )
        })
        return(
            <div className="btn-group">
            {buttons}
            </div>
        )

}

export default PostStatusFilfer