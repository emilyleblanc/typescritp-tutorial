// We have to define what the prop types are to be able to use them
type GreetName = {
  name: string;
  // The "messageCount" has a "?" next to it to indicate that this is an optional type
  messageCount?: number;
  isLoggedIn: boolean;
};

// Props has to have the value of the "GreetName" variable to be validated and useable
export const Greet = ({name, messageCount = 0, isLoggedIn}: GreetName) => {

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
