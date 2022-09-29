import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import React, {useState} from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


function Mark() {
const[studentId,setStudentId]=useState([]);
const[marks,setMarks]=useState([]);
const[avg,setAvg]=useState(0);
const [modalShow, setModalShow] =useState(false);


const getData=(e)=>{
    e.preventDefault();
  axios.get(`https://6334607d433198e79dd6c151.mockapi.io/subject/${studentId}`).then((res)=>{setMarks(res.data)
  let total=marks.maths+marks.physics+marks.chemistry+marks.biology+marks.english;
  let average=Math.floor(total/5)
  setAvg(average)
})
}

   const now=avg;
   let status;
   let progressColor;

    if(now>90){
     progressColor="success"
     status="Success"
}

if(now<90&&now>=70){
    progressColor="info"
    status="average"
}

if(now<70&&now>=50){
    progressColor="warning"
    status="Pass"
}

if(now<30){
    progressColor="danger"
    status="Fail"
}
   
   
  return (
    <div style={{marginLeft:'5%',marginTop:"2%"}}>
    <h5>Calculate the percentage level of a Person's mark</h5><br/>

    <Form onSubmit={getData}>
    
      <Form.Group className="mb-3" style={{width:"15%"}}>
        <Form.Control type="number" placeholder="Student ID" value={studentId} onChange={(e)=>setStudentId(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Get Data From Server
      </Button>
    </Form><br/>

    <h5>Subject Percentage</h5><br/>
    <Form>
    
      <Form.Group className="mb-3" style={{width:"25%"}}>
        <Form.Control type="number" placeholder="Maths %" defaultValue={marks.maths}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{width:"25%"}}>
        <Form.Control type="number" placeholder='Physics %' defaultValue={marks.physics}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{width:"25%"}}>
      <Form.Control type="number" placeholder="Chemistry %" defaultValue={marks.chemistry}/>
    </Form.Group>
    <Form.Group className="mb-3" style={{width:"25%"}}>
      <Form.Control type="number" placeholder="Biology %" defaultValue={marks.biology}/>
    </Form.Group>
    <Form.Group className="mb-3" style={{width:"25%"}}>
      <Form.Control type="number" placeholder="English %" defaultValue={marks.english}/>
    </Form.Group>
    
    </Form><br/>    
    <h5>Total Percentage</h5><br/>
    <ProgressBar style={{width:'70%'}} variant={progressColor} now={now} label={`${now}% Complete (${status})`}/>
    <br/>
    <Button variant="success" onClick={() => setModalShow(true)}>
        Add Subject 
      </Button>

      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      id={studentId}
    />
    </div>
  );
}

export default Mark;