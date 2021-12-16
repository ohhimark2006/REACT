import React from 'react';
// import {fetchUsers} from './redux/thunkapi';
 import {FETCH_USERS_REQUEST} from './redux/Action';

import {useSelector, useDispatch} from 'react-redux';

export default function Users() {
    const state =  useSelector(state => state); // mapStateToProps
    const dispatch = useDispatch(); // mapDispatchToProps

    let {loading, users, error} = state;

    // componentDidMount
    React.useEffect(() => {
        // dispatch(fetchUsers());
        dispatch({type: FETCH_USERS_REQUEST});
    },[]);

    return <div>
        <button type="button" onClick={() => dispatch({type: FETCH_USERS_REQUEST})}>Refresh</button>
        {
            loading ? <h1>Loading...</h1>: users.map(user => <h1 
                key={user.id}>{user.name}, {user.email}</h1>)
        }
    </div>

}