import React from "react";
import UserContext from "./UserContext";

// children --> generic name pass as it is
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// UserContext.Provider is mandatory 

/* Step 1: Create Context
   Step 2: Provide Context
   Step 3: Consume Context */


/* Context = global box
   value={{user, setUser}}
Inside the box:
- user → current value
- setUser → function to change it */