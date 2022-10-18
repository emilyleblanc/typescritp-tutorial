// Defining the type of props that are being passed to this component are defined in a seperate file. This is a good tip for complex applications
import {PersonProps} from '../types/Person.type'

// Props will take the "PersonProps" variable to be validated and useable
export const Person = ({name}: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
