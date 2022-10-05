
import React,{useReducer} from 'react'

const number=0;

const reducer = (stat,action)=>{
    switch(action){
        case 'gam3':
            return stat + 1
        case 'na2c':
            return stat - 1
        case 'resat':
            return number
        default: return stat
    } 
}


function Counter() {
    const [conut , dispatch]=useReducer(reducer,number)
    return (
        <div>
            {conut}
            <button onClick={()=> dispatch('gam3')}>gam3</button>
            <button onClick={()=> dispatch('na2c')}>na2c</button>
            <button onClick={()=> dispatch('resat')}>reset</button>
        </div>
    )
}

export default Counter