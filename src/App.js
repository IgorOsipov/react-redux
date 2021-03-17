import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container className="pt-3">
        <Row>
          <Col>
            Form
          </Col>
        </Row>
        <Row>
          <Col>
            Posts
            </Col>
          <Col>
            Fetched posts
            </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
