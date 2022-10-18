//you can reuse types as follows
//Name type is first deifined here
type Name = {
    first: string
    last: string
}

export type PersonProps = {
    //Name type is then used here
    name: Name
}

// Defining that the props being received is an array with an object inside: {}[]
export type PersonListProps = {
    //Name type prop is reused here in an array
    names: Name[];
  };

