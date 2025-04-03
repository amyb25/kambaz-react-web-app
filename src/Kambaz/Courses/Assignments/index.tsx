import { Button, FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import DeleteButton from "./DeleteButton";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";

export default function Assignments() {
  const { cid, aid } = useParams();
  const [assignmentTitle, {/*setAssignmentTitle*/}] = useState("");
  const [assignmentDes, {/*setAssignmentDes*/}] = useState("");
  const [assignmentPoints, {/*setAssignmentPoints*/}] = useState("");
  const [dueDate, {/*setDueDate*/}] = useState("");
  const [from, {/*setFrom*/}] = useState("");
  const [until, {/*setUntil*/}] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const dispatch = useDispatch();

  // Fetch assignments for the course
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments)); // Make sure to update Redux state with fetched assignments
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]); // Fetch assignments when course ID changes

  useEffect(() => {
    console.log("Updated Assignments:", assignments); // Log to verify that assignments are updating
  }, [assignments]);

  // Create a new assignment for the course
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    
    const newAssignment = {
      _id: uuidv4(), 
      title: assignmentTitle,
      course: cid,
      description: assignmentDes,
      points: assignmentPoints, 
      dueDate: dueDate, 
      getAvailableFrom: from, 
      getAvailableUntil: until,
      assignment: aid,
    };
    
    // Create the assignment in the server (if needed)
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    
    // Dispatch action to add assignment to Redux store
    dispatch(addAssignment(assignment)); // This will update the Redux store and the UI
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  // const saveAssignment = async (assignment: any) => {
  //   await assignmentClient.updateAssignment(assignment);
  //   dispatch(updateAssignment(assignment));
  // };



  // Render the list of assignments
  return (
    <div>
      <div id="wd-assignments" className="p-2.5 position-relative mb-4 d-flex gap-2 align-items-center">
        <HiMagnifyingGlass className="position-absolute top-50 translate-middle-y ms-3" />
        <FormControl type="search" placeholder="Search..." className="ps-5" />
        <Link to={`/Kambaz/Courses/${cid}/Assignments/New`} style={{ textDecoration: "none" }}>
          <Button variant="danger" size="lg" className="me-1 d-flex align-items-center gap-1" id="wd-add-module-btn">
            <FaPlus className="fs-6" />
            Assignment
          </Button>
        </Link>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <div className="wd-title p-3 ps-2 bg-secondary fs-5">
          <BsGripVertical className="me-2" /> ASSIGNMENTS
          <div className="float-end">
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-module list-group-item mb-0 fs-6 border-gray">
            <BsGripVertical className="fs-3 position-relative bring-down-first" />
            <LiaClipboardListSolid className="me-3 text-success fs-2 position-relative bring-down" />
            <div className="position-absolute make-assignment-move translate-middle w-75">
              <Link
                onClick={createAssignmentForCourse}
                className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
              >
                <br />
                <b>{assignment.title}</b>
              </Link>
              <p>
                <text className="text-danger">Multiple Modules</text> | 
                <b> Not Available until </b> {assignment.getAvailableUntil} | 
                <b> Due </b> {assignment.dueDate} | 
                {assignment.points} pts
                <DeleteButton 
                  assignmentTitle={assignment._id} 
                  deleteAssignment={() => removeAssignment(assignment._id)} 
                />              </p>
            </div>
            <br /><br /><br />
          </li>
        ))}
      </ListGroup>
    </div>
  );
}

