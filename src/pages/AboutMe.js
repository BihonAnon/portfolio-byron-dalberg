import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Aboutme() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center my-5 gap-3">
      <Card className="my-4 bg-dark text-black container-sm">
        <Card.Img src="https://i.ibb.co/7Q13k3W/IMG-6036.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{color: 'white'}}>About Me</Card.Title>
          <Card.Text style={{color: 'white'}}>
            Description of me still in progress, Been working with Carrer Services.
          </Card.Text>
          <Card.Text style={{color: 'white'}}>Last updated 8/15/2022</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>
      <Footer />
    </>
  );
}