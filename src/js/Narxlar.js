import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class Narxlar extends Component {
    state={
        soat:true
    }
    button1=()=>{
this.setState({soat:false})
    }
    button=()=>{
        this.setState({soat:true}) 
    }
    
    render() {
        return (
            <div>
                <button onClick={this.button1}>false</button> <button onClick={this.button}>true</button>
                {this.state.soat?
                (<div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.imagesjunction.com/images/img/love_wallpapers.jpg" />
  <Card.Body>
    <Card.Title>Card Title1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.imagesjunction.com/images/img/love_wallpapers.jpg" />
  <Card.Body>
    <Card.Title>Card Title1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
):(<div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pin.dekhnews.com/wp-content/uploads/2019/10/Cute-Love-Images-5.jpg" />
  <Card.Body>
    <Card.Title>Card Title2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pin.dekhnews.com/wp-content/uploads/2019/10/Cute-Love-Images-5.jpg" />
  <Card.Body>
    <Card.Title>Card Title2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></div>)}
            </div>
        )
    }
}
