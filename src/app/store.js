import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import {applyMiddleware} from 'redux';
import logger from 'redux-logger'
import { selectProjectType } from '../reducers/projectTypeSlice';

export default configureStore({
    reducer: {
       counter: counterReducer,
       projectType: selectProjectType
    },
    })