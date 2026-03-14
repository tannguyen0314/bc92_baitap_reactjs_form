import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentList: [],
  studentEdit: null, 
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.studentList = state.studentList.filter(s => s.maSV !== action.payload);
    },
    editStudent: (state, action) => {
      state.studentEdit = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.studentList.findIndex(s => s.maSV === action.payload.maSV);
      if (index !== -1) {
        state.studentList[index] = action.payload;
      }
      state.studentEdit = null; 
    }
  }
});

export const { addStudent, deleteStudent, editStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;