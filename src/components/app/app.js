import React, {Component} from 'react'

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import PostStatusFilfer from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import DeleteButton from '../delete-button'

import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
`;



export default class App extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, like: false, id:1},
                {label: 'That is so good', important: false, like: false, id:2},
                {label: 'I need a break', important: false, like: false, id:3}
            ],
            term:'',
            filter: 'all',
            text: '',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(element => (element.id==id));
            const before = data.slice(0, index);
            const after = data.slice (index+1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id===id);
            
            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
            
            return {
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id===id);
            
            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
            
            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter(item=>item.label.toLowerCase().includes(term))
    }

    filterPost(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    clearTextState = () => {
        this.setState({
            text: ''
        })
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like ).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return(
            <AppBlock>
                <AppHeader  //func
                liked={liked}
                allPosts={allPosts}
                />
            <div className="search-panel d-flex">
                <SearcPanel  //func
                onUpdateSearch={this.onUpdateSearch}
                />
                <PostStatusFilfer     //func
                filter={filter}
                onFilterSelect={this.onFilterSelect}
                />
            </div>
                <PostList   //func
                posts = {visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLike={this.onToggleLike}
                />
                <PostAddForm  //func
                onValueChange={this.onValueChange}
                addItem={this.addItem}
                text={this.state.text}
                clearTextState={this.clearTextState}
                />
                <DeleteButton
                data={this.state.data}
                deleteItem={this.deleteItem}
                />
            </AppBlock>
    
        )
    }
}
