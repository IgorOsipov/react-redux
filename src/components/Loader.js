import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => (
    <Spinner animation="border" variant="danger" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
)