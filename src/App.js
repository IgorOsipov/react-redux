import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';


function App() {
  return (
    <div className="App">
      <Container className="pt-3">
        <Row>
          <Col>
            <PostForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Синхронные посты</h2>
            <Row>
              <Posts />
            </Row>
          </Col>
          <Col>
            <h2>Ассинхронные посты</h2>
            <FetchedPosts />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
