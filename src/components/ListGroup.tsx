// import { Fragment } from "react";

function ListGroup() {
  const items = ["Delhi", "Bhubaneshwar", "Kolkata", "Gurugram"];

  return (
    // <Fragment></Fragment>
    <>
      <h1>My List</h1>
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
