// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Now we have to pass props too */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
