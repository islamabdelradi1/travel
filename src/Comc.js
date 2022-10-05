import React from 'react'
import Come from './Come';
export const UserContext = React.createContext();
export const TypeContext= React.createContext();
function Comc() {
    return (
        <UserContext.Provider value={'Islam'}>
        <TypeContext.Provider value={'Abdelradi'}>
        <div> 
            <Come />
        </div>
        </TypeContext.Provider>
    </UserContext.Provider>
    )
}

export default Comc