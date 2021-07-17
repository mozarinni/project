import React, {Component} from "react";
import ItemList from '../itemList';
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService.js';
import {withRouter} from 'react-router-dom';

class bookPage extends Component{

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error){
            return <ErrorMessage/>
        }

        return ( 
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name, publisher})=>`${name} (${publisher})`}/>
        )
    }
}

export default withRouter(bookPage);