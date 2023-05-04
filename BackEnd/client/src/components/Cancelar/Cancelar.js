import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cancelar.css';

class Cancelar extends Component {
  state = {
    request: {},
    lgShow: false,
  } 

  getCancel = async (request_id) => {
    const response = await fetch(`/api/request/${request_id}`);
    const data = await response.json();
    const request_json = data[0];
    console.log(request_json);
    this.setState({ request: request_json });
  }

  handleModalOpen = () => {
    this.setState({ lgShow: true });
    this.getCancel(this.props.request_id);
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
            <Modal.Title className='derecho'>
              Cancelacion
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form>
                <Form.Label>Are you sure that you want to CANCEL this client's information?</Form.Label>
                <Col sm={4} md={4} >
                  <Form.Label>Request Id</Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.request.request_id || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
              </Form>
            </Row>
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
