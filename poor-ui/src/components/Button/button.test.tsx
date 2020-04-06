import React from 'react';
import Button,{ButtonProps,ButtonSize,ButtonType} from './Button';
import { render,fireEvent } from '@testing-library/react';

const defaultProps = {
  onClick:jest.fn()
}

const testProps:ButtonProps ={
  btnType:ButtonType.Primary,
  size: ButtonSize.Large,
  className:'klass'
}

describe('test Button Component', ()=>{
  test('test render the default Button',()=>{
    const wraper = render(<Button {...defaultProps}>Test</Button>);
    const element =  wraper.getByText('Test');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled;
  })
  test('test the Type of Button',()=>{
    const wraper = render(<Button {...testProps}>Test</Button>);
    const element =  wraper.getByText('Test');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  })
})