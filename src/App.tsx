// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  // const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div className="alert alert-primary">
      {/* Now we have to pass props too
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert text="Hello Ayush"/> */}
      {/* //! If text are in long format, passing text parameter is not appropriate. */}
      {/* //! So we use <Alert></Alert> and pass our text here and set our prop type to {text: string}*/}
      <Alert>
        Hello <span className="text-danger">Ayush</span>
      </Alert>
      <br />
      <MyButton abcxyz={"Ayush Senapati"} />
    </div>
  );
}

export default App;
