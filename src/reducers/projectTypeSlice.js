import {createSlice} from '@reduxjs/toolkit'


export const projectTypeSlice = createSlice({
    name: 'projectType',
    initialState: {
        value: '',
    },
    reducers: {
        selectProjectType: (state) => {},
        
    }

})
export const {selectProjectType} = projectTypeSlice.actions
export default projectTypeSlice.reducer
