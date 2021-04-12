import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import { AlertMessage } from './AlertMessage';

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
            return this.props.showAlert("Поле не может быть пустым");
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
                {this.props.alert && <AlertMessage text={this.props.alert} />}
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

const mapStateToProps = state => ({
    alert: state.app.alert
})

const mapDispatchToProps = {
    createPost,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)