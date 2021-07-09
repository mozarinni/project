import React, {Component} from "react";
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";

import 'bootstrap/dist/css/bootstrap.css'


export default class App extends Component {
    
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
                </Container>
            </>
        )
    }
}
