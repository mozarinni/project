import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Learning React', important: true, id: 'qwer'},
        {label: 'Sample text', important: false, id: 'cswqre'},
        {label: "What's up", important: false, id: 'tesdf'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">   
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;