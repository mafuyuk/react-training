// Organismsな実装例

import React, {Fragment} from 'react';
import SectionTitle from '../atoms/sectionTitle';
import ProductionList from '../molecules/productList';

const SalesRanking = (props) => {
  return (
    <Fragment>
      <SectionTitle heading="売り上げランキング" />
      <ProductionList items={props.items} />
    </Fragment>
  );
};

export default SalesRanking;