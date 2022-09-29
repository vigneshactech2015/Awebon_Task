import axios from 'axios';
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function MyVerticallyCenteredModal(props) {

    const[newSubject,setNewSubject]=useState([]);
    const[newMark,setNewMark]=useState([]);

    const id=props.id;

    const onSubmitHandler=(e)=>{
    e.preventDefault();
    let data={
        newSubject:newMark}
    axios.put(`https://6334607d433198e79dd6c151.mockapi.io/subject/${id}`,data).then(alert('Subject added Successfully'))
setNewMark('');
setNewSubject('');    
}
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Subject and Mark Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" style={{width:"25%"}}>
          <Form.Control type="text" placeholder="Subject" value={newSubject} onChange={(e)=>setNewSubject(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:"25%"}}>
          <Form.Control type="number" placeholder='Mark' value={newMark} onChange={(e)=>setNewMark(e.target.value)}/>
        </Form.Group>
        <Button variant="success" type="submit">
          Add Subject
        </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal