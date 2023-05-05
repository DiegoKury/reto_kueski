import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Acceso.css';



class Acceso extends Component {
  state = {
    request: {},
    lgShow: false,
  } 

  getAccess = async (request_id) => {
    const response = await fetch(`/api/request/${request_id}`);
    const data = await response.json();
    const request_json = data[0];
    this.setState({ request: request_json });
  }

  handleModalOpen = () => {
    this.setState({ lgShow: true });
    this.getAccess(this.props.request_id);
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
              Access
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col sm={4} md={4} hidden>
                  <Form.Label>Request Id</Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.request.request_id || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.client_name || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.request.client_first_last_name || ''}
                  autoFocus
                  readOnly
                />
                </Col>
                <Col sm={4} md={4}>
                <Form.Label>Second Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.request.client_second_last_name || ''}
                  autoFocus
                  readOnly
                />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.client_born_date || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Nationality</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.client_nationality || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Birth State</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.client_birth_state || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>CURP</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.client_curp || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    value={this.state.request.client_email || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.address_street || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                  <Form.Label>Address City</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.request.address_city || ''}
                    autoFocus
                    readOnly
                  />
                </Col>
                <Col sm={4} md={4}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.request.client_phone || ''}
                  autoFocus
                  readOnly
                />
              </Col>
              <Col sm={4} md={4}>
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.request.client_occupation || ''}
                  autoFocus
                  readOnly
                />
              </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleModalClose}>
              Close
            </Button>
            <Button variant="primary">
              Generate PDF
            </Button>
            <Button variant="success">
              Completed
            </Button>
          </Modal.Footer>
        </Modal>
    </>
    );
  }
}
export default Acceso;