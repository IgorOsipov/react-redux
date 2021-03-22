import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  margin-bottom: 30px
`;


export default function Post({post}) {
    return (
        <Col xs='6'>
            <Styles>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Styles>
        </Col>
    )
}