import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from '..';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <Button />', () => {
  it('should call right callback after click', () => {
    const onClick = sinon.spy();
    shallow(<Button onClick={onClick} />).simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
