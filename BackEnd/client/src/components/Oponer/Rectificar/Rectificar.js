import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Rectificar() {
    const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Details</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Rectificar 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row-1'>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                <Form.Label>Second Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
              </Form.Group>
            </Form>
          </div>
          <div className='row-2'>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Birth Date</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                  <Form.Label>Nationality</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                  <Form.Label>Birth State</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                </Form.Group>
            </Form>
          </div>
          <div className='row-3'>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>CURP</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                  <Form.Label>E-mail</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                  <Form.Label>Adress</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                  <Form.Label>Adress City</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="text"
                    autoFocus
                  />
                </Form.Group>
              </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Not Available
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Rectificar;