import React from "react";
import { Component } from "react";
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55
    }
  }
class Welcome extends Component{
    constructor(props){
        super(props)

        this.allProjects=this.allProjects.bind(this)
    }
    allProjects(){
        this.props.history.push('/projects');
    }

    render(){
        return(

            <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJGARqsVbpy65r_1lxjmnqrY7K3XmvtoQmQ&usqp=CAU" style={styles.cardImage} />
              <div className="text-center"><button  style={{margin: "10px"}} variant="primary" className="btn btn-danger" onClick={this.allProjects}>Project List</button></div>
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">KANBAN TOOL</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
              Kanban Tool (Project Management App) is used for managing the projects which are assigned to different Managers in the company. This tool will be managed by delivery head, project managers, and software developers.
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>

        //     <Card className="text-center">
        //          <Card.Header>Featured</Card.Header>
        //          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJGARqsVbpy65r_1lxjmnqrY7K3XmvtoQmQ&usqp=CAU" />
        //     <Card.Body>
        //      <Card.Title>KANBAN TOOL</Card.Title>
        //     <Card.Text>
        //          With supporting text below as a natural lead-in to additional content.
        //     </Card.Text>
        //     <button variant="primary"onClick={this.allProjects}>Go somewhere</button>
        //     </Card.Body>
        //     <Card.Footer className="text-muted">2 days ago</Card.Footer>
        // </Card>
        )
    }
}
export default Welcome