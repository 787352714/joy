import React from 'react';
import Alert,{AlertType,AlertProps} from './Alert';
import {render} from '@testing-library/react';

const defualtProps:AlertProps = {
  title:"test"
}

describe('test alert components',()=>{
  test('test alert componet base',()=>{
    const wraper = render(<Alert {...defualtProps} ></Alert>);
    const element = wraper.getByText('test');
    expect(element).toBeInTheDocument();
  })
})