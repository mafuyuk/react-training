// Organismsな実装例

import React, {Fragment, Component} from 'react';
import SectionTitle from '../atoms/sectionTitle';
import ProductionList from '../molecules/productList';
import UserList from ''; // 作っていない
import RegionList from '';
import TabPanel from '';

class SalesRanking extends Component {
  constructor(props) {
    super(props);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.state = {
      index: 0
    }
  }

  handleChangeIndex(index) {
    this.setState({ index })
  }

  render() {
    return (
      <Fragment>
        <SectionTitle heading="売り上げランキング" />
        <TabPanel
          current={this.state.index}
          onChange={this.handleChangeIndex}
        >
          <ProductionList items={this.props.products} />
          <UserList items={this.props.users} />
          <RegionList items={this.props.regions} />
        </TabPanel>
      </Fragment>
    );
  }
}

export default SalesRanking;