
{/*
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import "./styles.css";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", 
    name: "New Course", 
    number: "New Number", 
    startDate: "2023-09-10", 
    endDate: "2023-12-15", 
    description: "New Description", 
    image: "public/images/reactjs.jpeg"
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
};

  // Function to fetch all courses for the current user
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // This function is called to add a new course
  const addNewCourse = async () => {
    try {
      // Create the course on the backend
      const newCourse = await userClient.createCourse(course);

      // Update the local state by appending the new course
      setCourses((prevCourses) => [...prevCourses, newCourse]);

      // Optionally: You can reset the course form to the default state if needed
      setCourse({
        _id: "1234", 
        name: "New Course", 
        number: "New Number", 
        startDate: "2023-09-10", 
        endDate: "2023-12-15", 
        description: "New Description", 
        image: "public/images/reactjs.jpeg"
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Use effect to load courses on component mount or when currentUser changes
  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addCourse={addNewCourse} 
                deleteCourse={function (courseId: string): void {
                  throw new Error("Function not implemented.");
                } } 
                updateCourse={function (course: { _id: string; name: string; description: string; }): void {
                  throw new Error("Function not implemented.");
                } }
              />
            </ProtectedRoute>
            } />            
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}*/}
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import "./styles.css";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", 
    name: "New Course", 
    number: "New Number", 
    startDate: "2023-09-10", 
    endDate: "2023-12-15", 
    description: "New Description", 
    image: "public/images/reactjs.jpeg"
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Function to delete a course (also removes it from the state)
  const deleteCourse = async (courseId: string) => {
    try {
      // // Call the backend API to delete the course
      // const status = await courseClient.deleteCourse(courseId);
      
      // If successful, filter out the deleted course from the local state
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      // Update the course on the backend
      await courseClient.updateCourse(course);
  
      // Update the course in the local state (frontend)
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // Function to fetch all courses for the current user
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // This function is called to add a new course
  const addNewCourse = async () => {
    try {
      // Create the course on the backend
      const newCourse = await userClient.createCourse(course);

      // Update the local state by appending the new course
      setCourses((prevCourses) => [...prevCourses, newCourse]);

      // Optionally: You can reset the course form to the default state if needed
      setCourse({
        _id: "1234", 
        name: "New Course", 
        number: "New Number", 
        startDate: "2023-09-10", 
        endDate: "2023-12-15", 
        description: "New Description", 
        image: "public/images/reactjs.jpeg"
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Use effect to load courses on component mount or when currentUser changes
  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addCourse={addNewCourse}
                deleteCourse={deleteCourse} // Now correctly passed
                updateCourse={updateCourse}
              />
            </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}

