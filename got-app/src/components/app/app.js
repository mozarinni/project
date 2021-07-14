import React, {Component} from "react";
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";
import ItemList from '../itemList';
import CharDetails from '../itemDetails';
import gotService from '../../services/gotService.js'

import 'bootstrap/dist/css/bootstrap.css'


export default class App extends Component {
    
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    }

    toggleRandomChar = () => {
        const {showRandomChar} = this.state
        this.setState({ 
            showRandomChar: !showRandomChar});
    }

    render(){

        const {showRandomChar} = this.state;

        return(
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {showRandomChar && <RandomChar/>}
                            <Button onClick={this.toggleRandomChar}>
                                Toggle random character
                            </Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        )
    }
}
