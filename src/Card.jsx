import React from "react";

function Card({ item, setData, data }) {
  console.log(item);

  function incHandler(event) {
    let n_data = data.filter((d) => {
      return d.id !== item.id;
    });

    data[item.id].hour = parseInt(data[item.id].hour) + 1;
    setData(n_data);
  }

  return (
    <div className="flex gap-5 items-center">
        <input
        type="checkbox"
        name=""
        checked={item.checked}
        onChange={() => {
          // Toggle the checked state
          setData(data.map((d) => (d.id === item.id ? { ...d, checked: !d.checked } : d)));
        }}
      />
      <h1 style={{ textDecoration: item.checked ? "line-through" : "none" }}>
        {item.task}{" "}
      </h1>
      

      <button
        className="px-5 py-2 bg-blue-500 rounded-md"
        onClick={incHandler}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
