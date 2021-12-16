import axios  from 'axios';

import {fetchUsersRequest, fetchUsersSucess, fetchUsersFailure} from './ActionCreators'

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            response => dispatch(fetchUsersSucess(response.data))
        ).catch(ex => {
            dispatch(fetchUsersFailure(ex))
        });
    }
}