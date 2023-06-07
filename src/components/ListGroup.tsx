// import { Fragment } from "react";

function ListGroup() {
  // const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  let items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  items = [];

  // Normal Rendering
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List Items</h1>
  //       <p>No items found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No item found</p> : null;

  //! We can also use a function to get the correct output
  //! Benifits of using function is that we can have parameters
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null
  // }

  return (
    // <Fragment></Fragment>
    <>
      <h1>My List Heading</h1>
      {/* //! Conditional Rendering */}
      {/* { items.length===0 ? <p>No item found</p> : null } */}
      {/* //! We can also use AND gate logic i.e (1 && 'A' => 'A') */}
      {items.length === 0 && <p>No item found</p>}
      {/* {message} */}
      {/* {getMessage()} */}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
