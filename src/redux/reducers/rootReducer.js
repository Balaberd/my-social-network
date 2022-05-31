import { combineReducers } from "redux";
import { authenticator } from "./authenticator";
import { users } from "./users";
import { posts } from "./posts";


const rootReducer = combineReducers( {
    authenticator,
    users,
    posts
} );

export default rootReducer;