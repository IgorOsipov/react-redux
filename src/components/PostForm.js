import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default class PostForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state
        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)
        this.setState({title:''})
    }

    changeInputHandler = event =>{
        this.setState(prev=>({
            ...prev,
            ...{[event.target.name]: event.target.value}
        }))
    }

    render(){
        return (
            <Form onSubmit={this.submitHandler}>
                <h1>Post Form</h1>
                <Form.Group controlId="title">
                    <Form.Label>Заголовок поста</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </Form.Group>
                <Button variant="success" type="submit">Создать</Button>
            </Form>
        )
    }
}
