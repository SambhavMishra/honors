import React from 'react';

function MemoComponent({name}) {
    console.log("Rendering memo component");
  return (
    <div>
      The memo component is - {name}
    </div>
  );
}

export default React.memo(MemoComponent)