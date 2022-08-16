import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div>
      <Header />
    <Card>
      <Card.Header style={{fontWeight: "bold"}}>Frontend Skills</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>jQuery</ListGroup.Item>
        <ListGroup.Item>Responsive Design</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card>
      <Card.Header style={{fontWeight: "bold"}}>Backend Skills</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>APIs</ListGroup.Item>
        <ListGroup.Item>Node</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>MYSQL, Sequelize</ListGroup.Item>
        <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
        <ListGroup.Item>REST</ListGroup.Item>
        <ListGroup.Item>GraphQL</ListGroup.Item>
      </ListGroup>
    </Card>
    <Footer />
    </div>
  );
}

export default Resume;