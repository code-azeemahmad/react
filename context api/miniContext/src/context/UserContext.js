// pure and pure js
import React from "react";

const UserContext = React.createContext();

export default UserContext;

// assume context as a global variable
// every context is a provider, at the end of the day, apply a wrapper
{/* <UserContext>
    <Login />
    <Card>
        <Dashboard />
    </Card>
</UserContext> */}
// components inside context provider get access of all states of global UserContext
