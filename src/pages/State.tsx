import Counter from '../components/state/Counter'
import {LoggedIn} from '../components/state/LoggedIn'
import {User} from '../components/state/User'

export default function State() {
  return (
    <div>
        <User name = 'Emily' email='funtimes@gmail.com'/>
        <LoggedIn/>
        <Counter/>
    </div>
  )
}
