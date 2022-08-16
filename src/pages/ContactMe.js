import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';

function ContactForm() {
  return (
    <>
    <Header />
    <Form action="https://mailthis.to/byrondalberg@gmail.com" method="POST">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Your email" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" name="message" placeholder="add your message here!" />
      </Form.Group>
      <Button variant="primary" type="submit" value="Send">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default ContactForm;