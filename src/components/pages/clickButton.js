import React from 'react';
import { useState, useEffect } from 'react';

const ClickButton = () => {
  const [count, setCount] = useState(0);

  function buttonClicked() {
    setCount(count + 1);
  }

  return (
    <>
      <div class='prose w-full flex items-center flex-col min-h-[500px] bg-blue-500 justify-center'>
        <button onClick={buttonClicked} class='btn btn-primary'>
          Click
        </button>
        <p>Clicked : {count}</p>
      </div>
    </>
  );
};

export default ClickButton;
