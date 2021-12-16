import React from 'react';
import {fetchUsers} from './redux/thunkapi';
 
import {useSelector, useDispatch} from 'react-redux';

export default function Users() {
    const state =  useSelector(state => state); // mapStateToProps
    const dispatch = useDispatch(); // mapDispatchToProps

    let {loading, users, error} = state;

    // componentDidMount
    React.useEffect(() => {
        dispatch(fetchUsers());
    },[]);

    return <div>
        {
            loading ? <h1>Loading...</h1>: users.map(user => <h1 
                key={user.id}>{user.name}, {user.email}</h1>)
        }
    </div>

}