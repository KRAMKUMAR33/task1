import { Fragment } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Event1=()=>{


return(
    <Fragment>
    <div>
    <Card className="mt-3 ms-4" style={{ width: '18rem' }}>
        <Row>
            <Col  id="chw">
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-painted-watercolor-world-environment-day-illustration_52683-62115.jpg?size=626&ext=jpg" />
      </Col>
 <Col  >
      <Card.Body>
        <Card.Title>World Environment day</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Col>
      </Row>
    </Card>

    </div>
   </Fragment>
)




}