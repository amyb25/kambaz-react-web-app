import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
     enrollments: enrollments,
};
const saveEnrollments = (enrollments: any) => {
     localStorage.setItem("enrollments", JSON.stringify(enrollments));
};
const coursesEnrollSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: uuidv4(),
        course: enrollment.course,
        user: enrollment.user,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
      saveEnrollments(state.enrollments);
    },
    deleteEnrollment: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => m._id !== courseId);
    },
  },
});
export const { addEnrollment, deleteEnrollment } =
coursesEnrollSlice.actions;
export default coursesEnrollSlice.reducer;
{/*import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Assuming the structure of the initial state is known
interface Enrollment {
  _id: string;
  course: string;
  user: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

// Load the enrollments from localStorage (if available)
const loadEnrollments = (): Enrollment[] => {
  const enrollments = localStorage.getItem("enrollments");
  return enrollments ? JSON.parse(enrollments) : [];
};

// Save enrollments to localStorage
const saveEnrollments = (enrollments: Enrollment[]) => {
  localStorage.setItem("enrollments", JSON.stringify(enrollments));
};

const initialState: EnrollmentState = {
  enrollments: loadEnrollments(),
};

const coursesEnrollSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    // Action to add an enrollment
    addEnrollment: (state, action: PayloadAction<{ course: string; user: string }>) => {
      const newEnrollment: Enrollment = {
        _id: uuidv4(),
        course: action.payload.course,
        user: action.payload.user,
      };
      // Avoid adding duplicates (optional, depends on the use case)
      const existingEnrollment = state.enrollments.some(
        (enrollment) =>
          enrollment.course === newEnrollment.course && enrollment.user === newEnrollment.user
      );
      if (!existingEnrollment) {
        state.enrollments.push(newEnrollment);
        saveEnrollments(state.enrollments);
      }
    },

    // Action to delete an enrollment by ID
    deleteEnrollment: (state, action: PayloadAction<string>) => {
      const updatedEnrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== action.payload
      );
      state.enrollments = updatedEnrollments;
      saveEnrollments(state.enrollments);
    },
  },
});

export const { addEnrollment, deleteEnrollment } = coursesEnrollSlice.actions;
export default coursesEnrollSlice.reducer;
*/}