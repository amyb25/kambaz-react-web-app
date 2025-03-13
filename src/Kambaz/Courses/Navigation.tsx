import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    "Home", 
    "Modules", 
    "Piazza", 
    "Zoom", 
    "Assignments", 
    "Quizzes", 
    "Grades", 
    "People"
  ]
  return (
    <ListGroup className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem
        active ={pathname.includes(link)}
        className="text-danger bg-white border-0"
        as={Link}
        to={`/Kambaz/Courses/${cid}/${link}`}>
          {link}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

