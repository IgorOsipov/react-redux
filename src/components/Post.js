import React from 'react';
import { Card } from 'react-bootstrap';

export default function Post({post}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Title {post}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}