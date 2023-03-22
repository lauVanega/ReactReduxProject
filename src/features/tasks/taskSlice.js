import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title:"Task 1",
        descripticion: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title:"Task 2",
        descripticion: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasks:() => { console.log('TaskReducer') }
    }
})

export default taskSlice.reducer
