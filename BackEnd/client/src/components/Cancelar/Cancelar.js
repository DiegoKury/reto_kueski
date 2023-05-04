import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class Cancelar extends Component {
  state = {
    lgShow: false,
  }
  handleModalOpen = () => {
    this.setState({ lgShow: true });
  }

  handleModalClose = () => {
    this.setState({ lgShow: false });
  }
render() { 
  const { request_id } = this.props;
  return (
      <>
      <Button onClick={this.handleModalOpen}>Details</Button>
      <Modal 
          size="lg"
          show={this.state.lgShow}
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton onClick={this.handleModalClose}>
            <Modal.Title id="example-modal-sizes-title-lg">
              Cancelacion
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Are you sure that you want to CANCEL this clients information?</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Client with ID:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Cancelar;
