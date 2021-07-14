import React, {Component} from "react";
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import ErrorMessage from "../../errorMessage";
import gotService from '../../../services/gotService.js';
import RowBlock from "../../rowBlock";

export default class bookPage extends Component{

    gotService = new gotService();

    state = {
        selectedBook: 1,
        error: false
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {

        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name, publisher})=>`${name} (${publisher})`}/>
        )

        const bookDetails = (
            <ItemDetails itemId={this.state.selectedBook} page = "book">
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return ( 
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}