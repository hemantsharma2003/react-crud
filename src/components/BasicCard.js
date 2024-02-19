import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../logo.svg';
import { useState } from 'react';


function BasicCard(props) {
  const [count, setCount] = useState(0);

   let inc = () => {
    setCount(count+1)
   }
   
    
  
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {count}
           <button onClick={inc}>Click</button>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;