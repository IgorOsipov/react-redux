import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if(!title.trim()){
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
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

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)