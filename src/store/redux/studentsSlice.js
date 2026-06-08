import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
    name: 'student',
    initialState: [],
    reducers: {
        setStudents: (state, action) => {
            return action.payload;
        },
        addStudents: (state, action) => {
            state.push(action.payload);
        },
        updateStudentsInStore: (state, action) => {
            const update = action.payload;
            const index = state.findIndex(student => student.id === update.id);
            if(index !== -1) {
                state[index] = update;
            }
        },
        deleteStudentFromStore: (state, action) => {
            return state.filter(student => student.id !== action.payload);
        }
    }
})

export const{
    setStudents,
    addStudents,
    updateStudentsInStore,
    deleteStudentFromStore,
} = studentsSlice.actions;

export default studentsSlice.reducer;