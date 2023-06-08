import { ReactNode } from "react";

//! interface are used to define the shape of Props
interface Props {
  // text: string;
  // children: string;
  children: ReactNode; //! By setting children: ReactNode, we can pass HTML tags as props also.
}

// const Alert = (props: Props) => {
const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alert;
