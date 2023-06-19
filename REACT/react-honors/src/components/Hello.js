import React from 'react';

const Hello = () => {
//   return (
//     // Using JSX
//     <div>
//       <h1 id="hello" className='dummyClass'>Functional Component </h1>
//     </div>
//   );

//   Without jsx
  return (
    React.createElement('div',
    null,
    // <h1>Functional Component</h1>
    React.createElement('H1',{id: 'hello', className:'dummyClass'},
    "Second Functional Component")
    )
  )
}

export default Hello 
