import React, {Component} from 'react';
import gotService from '../../services/gotService'

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>   
    )  
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem(){
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }

        switch(this.props.page){
            case 'character':
                this.gotService.getCharacter(itemId)
                .then((item) => {
                    this.setState({item})    
                })
                break;
            case 'book':
                this.gotService.getBook(itemId)
                .then((item) => {
                    this.setState({item})    
                })
                break;
            case 'house':
                this.gotService.getHouse(itemId)
                .then((item) => {
                    this.setState({item})    
                })
                break;
            default:
                break;
        }
           

    }

    render(){

        if(!this.state.item){
            return <span className="select-error">Please select item</span> 
        }

        const {item} = this.state;
        const {name} = item;

        const className = this.props.page + "-details rounded";

        return (
            <div className={className}>
                <h4>{name}</h4>
                <ul className="list-group list_group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        )
    }
}
