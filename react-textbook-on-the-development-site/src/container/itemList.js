import React, {Fragment} from 'react';

const ItemList = (props) => {
  const listItems = props.data.map(data => {
    return (
      <p>{data.name}</p>
    );
  });

  return (
    <Fragment>
      {listItems}
    </Fragment>
  );
};

export default ItemList;