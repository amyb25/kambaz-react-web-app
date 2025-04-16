import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import AddAssignmentEditor from "./Assignments/AddEditor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useState, useEffect } from "react";
import * as client from "../Courses/client"; // Adjust this path according to your structure

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();  // Extract course ID from URL
  const [users, setUsers] = useState<any[]>([]); // State to hold users
  const course = courses.find((course) => course._id === cid);  // Find course by ID
  const { pathname } = useLocation();

  // Fetch users for a specific course
  useEffect(() => {
    const fetchUsersForCourse = async () => {
      if (!cid) return;
      try {
        const usersData = await client.findUsersForCourse(cid);  // Fetch users using the course ID
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsersForCourse();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/New" element={<AddAssignmentEditor />} />
            {/* Passing users to the PeopleTable route */}
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
