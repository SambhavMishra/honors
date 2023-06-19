import React from 'react';

export default function HookCounter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick ={P => setCount(count + 1)}> Count {count}</button>
    </div>
  );
}

