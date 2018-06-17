// Moleculesの実装例

import React from 'react';
import PrimaryCard from '../atoms/primaryButton';

const itemList = (items) => {
  return items.map(({ name, handleClick }) => {
    return(
      <li>
        <p>{name}</p>
        <PrimaryButton
          label="警告文" // 不変的な値はMolecules内で直接指定してもよい
          handleClick={handleClick}
        />
      </li>
    );
  });
};

const ProductList = (props) => {
  return (
    <ul>
      {itemList(props.items)}
    </ul>
  );
};
export default ProductList;