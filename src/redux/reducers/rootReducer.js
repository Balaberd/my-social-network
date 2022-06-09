import { combineReducers } from "redux";
import { authenticator } from "./authenticator";
import { users } from "./users";
import { posts } from "./posts";
import { dialogs } from "./dialogs";


const rootReducer = combineReducers( {
    authenticator,
    users,
    posts,
    dialogs,
} );

export default rootReducer;