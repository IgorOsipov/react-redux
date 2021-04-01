import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  margin-bottom: 30px
`;


export default function Post({post}) {
    return (
        <Col xs='12'>
            <Styles>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Styles>
        </Col>
    )
}