import React, { useState } from "react";

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {

  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {items.map((i, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${i}_${index}`}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
});

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
