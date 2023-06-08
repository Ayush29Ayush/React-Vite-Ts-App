// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  // const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];
  // items = [];

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

  //! Event Handler
  // const handleClick = (item: string) => {console.log(`Clicked ${item}`)}
  //? We have to provide the datatype along with the argument name when passing to the function. Ex -> Event: MouseEvent. here Event is the argument name and MouseEvent is its type.
  const handleClick = (Event: MouseEvent) => {
    console.log(Event);
  };

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
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(`Clicked ${item}`)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
