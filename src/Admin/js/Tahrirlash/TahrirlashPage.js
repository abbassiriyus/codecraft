import React, { Component } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { getContact } from "../../../host/config";

export default class TahrirlashPage extends Component {
  state = {
    boganishlar: [],
    show: false,
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  getBoglanishPut = () => {
    getContact().then((res) => {
      this.setState({
        boganishlar: res.data[0],
      });
    });
  };
  componentDidMount() {
    this.getBoglanishPut();
  }
  render() {
    const { boganishlar } = this.state;
    return (
      <div className="col-lg-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>bog'lanishlar</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{boganishlar.telegram}</td>
              <td>
                <Button variant="success" onClick={this.handleShow}>
                  {" "}
                  Edit{" "}
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>{boganishlar.instagram}</td>
              <td>
                <Button variant="success" onClick={this.handleShow}>
                  {" "}
                  Edit{" "}
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>{boganishlar.facebook}</td>
              <td>
                <Button variant="success" onClick={this.handleShow}>
                  {" "}
                  Edit{" "}
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>{boganishlar.phone}</td>
              <td>
                <Button variant="success" onClick={this.handleShow}>
                  {" "}
                  Edit{" "}
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formani to'ldiring</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Telegram" />
                <Form.Text className="text-muted">
                  formani to'ldiring: 
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
