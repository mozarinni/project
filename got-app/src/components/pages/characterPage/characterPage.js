import React, {Component} from "react";
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import ErrorMessage from "../../errorMessage";
import gotService from '../../../services/gotService.js';
import RowBlock from "../../rowBlock";

export default class characterPage extends Component{

    gotService = new gotService();

    state = {
        selectedChar: 130,
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
            selectedChar: id
        })
    }

    render() {

        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender})=>`${name} (${gender})`}/>
        )

        const charDetails = (
            <ItemDetails itemId={this.state.selectedChar} page = "character">
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return ( 
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}