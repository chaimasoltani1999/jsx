import logo from './logo.svg';
import './App.css';
import { Price } from './Price';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  var name=""
  return (
    
    <div className="App">
     
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  />
      <Image></Image>
      <Card.Body>
        <Card.Title><Name></Name></Card.Title>
        <Card.Text>
        <Description></Description>
        </Card.Text>
        <Card.Text>
        <Price></Price>
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {name?  <h1>Hello {name}</h1>:<h1>hello there</h1>}
    </div>

  );
}

export default App;
