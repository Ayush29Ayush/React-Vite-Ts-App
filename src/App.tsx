// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];

  return (
    <div>
      {/* Now we have to pass props too */}
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
