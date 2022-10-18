import { useState } from 'react'

export function LoggedIn() {
    //typescript inferes that isLogged in a a boolean value
    //therefore we do not need to set the types in this case.
    //if we pass a value to the setIsLoggedIn function that is not a boolean we will get an error
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const handleLogin = () => { setIsLoggedIn(true) }
    const handleLogout = () => { setIsLoggedIn(false) }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
