import React, { useState } from 'react';

const DropDownColor = () => {
  const colors = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'blue', label: 'Blue' },
  ];
  const [color, setColor] = useState(colors[0].value);

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div
        class='w-full min-h-[300px] flex flex-col justify-center items-center'
        style={{ backgroundColor: color }}
      >
        <select
          onChange={changeColor}
          value={color}
          class='select select-bordered select-sm'
        >
          <option value='' disabled>
            Select Color
          </option>
          {colors.map((col) => {
            return (
              <option key={col.value} value={col.value}>
                {col.label}
              </option>
            );
          })}
        </select>
        <br />
        <p class='text-black'>Selected Color: {color}</p>
      </div>
    </>
  );
};
export default DropDownColor;
