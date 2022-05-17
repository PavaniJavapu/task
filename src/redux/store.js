import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../components/Todo/reducer/todoSlice';
export default configureStore({
    reducer:{
        todos:todoReducer,
    }
});