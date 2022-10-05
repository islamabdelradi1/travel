import React,{useContext} from 'react'
import{UserContext,TypeContext} from './Comc';

function Come() {
    const user = useContext(UserContext);
    const Type = useContext(TypeContext);

    return (
        <div>Come,{user},{Type}</div>
    )
}

export default Come