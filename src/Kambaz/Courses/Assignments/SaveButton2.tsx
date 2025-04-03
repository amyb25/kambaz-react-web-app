{/*import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
// {addAssignment}: {addAssignment:()=>void;}
export default function SaveButton2({ updateAssignment}: {updateAssignment:()=>void;} ){
     const { cid, aid } = useParams();
     // const dispatch = useDispatch();
     // const assignments = db.assignments;
     const [, setAssignmentTitle] = useState("");
     const [, setAssignmentDes] = useState("");
     const [, setAssignmentPoints] = useState("");
     const [, setDueDate] = useState("");
     const [, setFrom] = useState("");
     const [, setUntil] = useState("");
     const { assignments } = useSelector((state: any) => state.assignmentReducer);
     const navigate = useNavigate();

    

     const handleUpdate = () => {
          updateAssignment();
          navigate(`/Kambaz/Courses/${cid}/Assignments`); 
     }
     useEffect(() => {
          const assignment = assignments.find((a: any) => a._id === aid);
          if (assignment) {
            setAssignmentTitle(assignment.title);
            setAssignmentDes(assignment.description);
            setAssignmentPoints(assignment.points);
            setDueDate(assignment.dueDate);
            setFrom(assignment.getAvailableFrom);
            setUntil(assignment.getAvailableUntil);
          }
        }, [assignments, aid]);
     return (
     <div > 
   
   <Button className="btn btn-lg btn-danger" id="wd-add-module-btn" 
                             onClick={handleUpdate}>

                                   Save
                              </Button>
     
      </div>
     );}*/}
     import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function SaveButton2({ updateAssignment }: { updateAssignment: (assignment: any) => void; }) {
  const { cid, aid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDes, setAssignmentDes] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [from, setFrom] = useState("");
  const [until, setUntil] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const navigate = useNavigate();

  // Set state with existing assignment data when component mounts or assignment changes
  useEffect(() => {
    const assignment = assignments.find((a: any) => a._id === aid);
    if (assignment) {
      setAssignmentTitle(assignment.title);
      setAssignmentDes(assignment.description);
      setAssignmentPoints(assignment.points);
      setDueDate(assignment.dueDate);
      setFrom(assignment.getAvailableFrom);
      setUntil(assignment.getAvailableUntil);
    }
  }, [assignments, aid]);

  // Handle assignment update
  const handleUpdate = () => {
    const updatedAssignment = {
      _id: aid,
      title: assignmentTitle,
      description: assignmentDes,
      points: assignmentPoints,
      dueDate: dueDate,
      getAvailableFrom: from,
      getAvailableUntil: until,
    };

    updateAssignment(updatedAssignment);
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formAssignmentTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter assignment title"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAssignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter assignment description"
            value={assignmentDes}
            onChange={(e) => setAssignmentDes(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAssignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter points"
            value={assignmentPoints}
            onChange={(e) => setAssignmentPoints(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAssignmentDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAvailableFrom">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="datetime-local"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAvailableUntil">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="datetime-local"
            value={until}
            onChange={(e) => setUntil(e.target.value)}
          />
        </Form.Group>

        <Button className="btn btn-lg btn-success" id="wd-update-assignment-btn" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
}
