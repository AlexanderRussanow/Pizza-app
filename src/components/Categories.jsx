import React, { useState } from "react";

const Categories = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items.map((i, index) => (
          <li
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
            key={`${i}_${index}`}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

//   return (
//     <div className="categories">
//       <ul>
//          <li className={ active === null ? 'active' : null} onClick={() => setActive(null)}>All</li>
//         {items.map((i, index) => (
//           <li
//             className={active === index ? "active" : null}
//             onClick={() => setActive(index)}
//             key={`${i}_${index}`}
//           >
//             {i}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
