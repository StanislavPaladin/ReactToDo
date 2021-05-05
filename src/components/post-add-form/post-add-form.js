import React from 'react';
import './post-add-form.css'

 const  PostAddForm = ({addItem, onValueChange, text, clearTextState}) => { 
    // constructor(props) {
    //     super();
       
    //     this.onValueChange = this.onValueChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    // this.state = {
    //     text: ''
    // }
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(text.split(' ').join('') !== "") {
            addItem(text);
        }
        clearTextState()
    }

        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange = {onValueChange}
                    value={text}
                    />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                    Добавить</button>
                
            </form>
        )
}

export default PostAddForm;