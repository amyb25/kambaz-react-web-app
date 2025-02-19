import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router";
import * as db from "../../Database";


// hello this a comment 
export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
        <div>
            <AssignmentControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS
                        <IoEllipsisVertical className="fs-4 float-end" />
                        <FaPlus className="fs-4 float-end me-4" style={{ color: "grey" }} />
                        <div className="fs-4 float-end me-4" id="wd-assignments-title">
                            40% of Total
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments.map ((assignment: any) => (<ListGroup.Item
                            as={Link}
                            to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="me-2 fs-4" style={{ color: "green" }} />
                                {assignment.title}
                                <p className="wd-assignment-description ps-5">{assignment.description}</p>
                            <LessonControlButtons />
                            <p className="wd-assignment-description ps-5">
                                <span style={{ color: "red" }}>Multiple Modules </span> | <strong>Not available until</strong> May 6 at 12:00am |
                                <strong> Due</strong> May 13 at 11:59pm | {assignment.points} pts
                            </p>
                        </ListGroup.Item>))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
