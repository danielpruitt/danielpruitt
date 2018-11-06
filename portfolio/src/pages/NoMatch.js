import React from "react";
import {Container, Row, Col} from "../components/Grid";
const NoMatch = () => (
    <div>
        <Container> 
            <Row>
                <Col size="12">
                    <h1 className="custFont">I'm Sorry You've hit a page that doesn't exist. Use the name to go back.</h1>
                </Col>
            </Row>
        </Container>
    </div>

)

export default NoMatch;