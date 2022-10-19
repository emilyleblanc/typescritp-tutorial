import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export function User() {
    //"useState<AuthUser | null>(null)" this infers types so you can have the initial state set to null prior to a value being set. Now the initial value is null and the AuthUser values can be used in the setUser function.
    const [user, setUser] = useState<AuthUser | null>(null)

    //below is a "type assertion" example. The best use case for this example is if the state is changed from null shortly after the component renders and will not change. In this case it would be if the user could not log out. 
    //eg.
    //const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => { setUser({ name:'Emily', email:'elb@funtimes.com'}) }
    const handleLogout = () => { setUser(null) } 

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email}</div>
        </div>
    )
}
