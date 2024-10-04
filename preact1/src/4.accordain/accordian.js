import React, { useState } from "react";

const Accordian = () => {
  const [indices, setIndices] = useState(0);
  const [multicheck, setIsMulticheck] = useState(false);

  const accordianData = [
    {
      id: 1,
      heading: "No 1",
      Content:
        "Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 ",
    },
    {
      id: 2,
      heading: "No 2",
      Content:
        "Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 ",
    },
    {
      id: 3,
      heading: "No 3",
      Content:
        "Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 ",
    },
    {
      id: 4,
      heading: "No 4",
      Content:
        "Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 Content 4 ",
    },
  ];

  const showContent = (id) => {
    setIndices(id);
  };
  return (
    <div>
      <input type="checkbox" checked={multicheck} onChange={(e)=>setIsMulticheck(e.target.checked)} />
      is multicheck?
      <div>
        {accordianData.map((item, indexes) => (
          <>
            <div
              onClick={() => showContent(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.heading}
            </div>
            {indices === item.id ? <div>{item.Content}</div> : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
