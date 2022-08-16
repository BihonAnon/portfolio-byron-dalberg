import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    <>
    <br></br>
  <Card id={props.title} className="bg-dark text-black container-sm">
    <Card.Img src={props.image} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Card.Text>Last updated {props.updatedAt}</Card.Text>
      <Card.Link href={props.projectLink}>Deployed Application</Card.Link>
    </Card.ImgOverlay>
  </Card>
  </>
  );
}

export default Project