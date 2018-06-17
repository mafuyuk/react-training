// Moleculesの実装例

import React, {Fragment} from 'react';
import PrimaryCard from '../atoms/primaryButton';

const CardPreset = (props) => {
  return (
    <Fragment>
      <p>{props.name}</p>
      <PrimaryButton
        label={props.linkLabel}
        handleClick={props.handleClick}
      />
    </Fragment>
  )
};

export default CardPreset;