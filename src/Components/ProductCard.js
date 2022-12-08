import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function ProductCard(props) { //props.product is the product we are selling
    const product = props.product; 
return (
    <Card>
        <Card.Body>
            <Card.Title>{product.Title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary">Add to</Button>
        </Card.Body>
    </Card>
)

}

export default ProductCard;