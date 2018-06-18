import React, { Fragment } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

const FooComponent = () => {
  return (
    <Fragment>
      <Button>Default</Button>
      <Button bsStyle="primary">Primary</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="danger">Danger</Button>
      <Button bsStyle="link">Link</Button>
      <DropdownButton>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </DropdownButton>
    </Fragment>
  )
};

export default FooComponent;
