import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Learning React', important: true, id: 1},
                {label: 'Sample text', important: false, id: 2},
                {label: "What's up", important: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    
    addItem(body){
        const newItem ={
            label: body,
            importatnt: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        console.log(`Important post ${id}`);
    }

    onToggleLiked(id) {
        console.log(`Liked post ${id}`);
    }
    
    render(){
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">   
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>                    
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}
