import React from 'react'
import './search-panel.css'
var _ = require('lodash');

const  SearchPanel = ({onUpdateSearch}) => {

        const  updateSearch = _.debounce(function(e) {
            const term = e.target.value.toLowerCase(); 
            console.log(term);  
            onUpdateSearch(term)
    },300)

        return(
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={updateSearch}
            />
        )
}

export default SearchPanel;