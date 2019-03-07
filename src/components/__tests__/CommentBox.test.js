import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentBox/></Root>);
})
afterEach(() => {
  wrapper.unmount();
})

it('has a text area and a button', () => {
  expect(wrapper.find('#text').length).toEqual(1);
  expect(wrapper.find('.button').length).toEqual(1);
})

describe('the text area', () => {
  beforeEach(() => {
    wrapper.find('#text').simulate('change', {
      target: { value: 'new comment' }
    });
  wrapper.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapper.find('#text').prop('value')).toEqual('new comment');
  })
  
  it('changes the value of text area to empty when form is submitted', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('#text').prop('value')).toEqual('');
  })
})

