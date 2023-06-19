import React from 'react';

// export default function Greet() {
//   return (
//     <div>
//       <h1>Hello there</h1>
//     </div>
//   );
// }


// const Greet = (props) => <h1>Hello {props.firstname} {props.lastname} this is functional component</h1>

const Greet = (props) => {
  console.log(props.firstname);
  // props.firstname = "Vinay";
  return (
    <>
    <h1>Hello, good morning {props.firstname}</h1>
    {props.children}
    </>
  )
}

export default Greet