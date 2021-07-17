import React, {Component} from "react";
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import {CharacterPage, BookPage, HousePage, BooksItem} from "../pages";
import gotService from '../../services/gotService.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

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
            <Router>
                <div className="app">
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row className="row">
                            <Col lg={{size: 5, offset: 0}}>
                                {showRandomChar && <RandomChar/>}
                                <Button onClick={this.toggleRandomChar}>
                                    Toggle random character
                                </Button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <h1>Welcome to GoT</h1>}/>
                        <Route path='/characters/' component={CharacterPage}/>
                        <Route path='/houses/' component={HousePage}/>
                        <Route path='/books/' exact component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params
                            return <BooksItem bookId={id}/>}
                        } />
                    </Container>
                </div>
            </Router>
        )
    }
}
