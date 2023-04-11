import { render } from "@testing-library/react";
import Detail from "../../../src/screens/Detail/Detail";

describe('Pruebas en <Detail>', () => { 
    
  test('debe de hacer match con el snapshot', () => {
    const view  = render ( <Detail/>)
    expect(view).toMatchSnapshot();
  });

}) 