import { render } from "@testing-library/react";
import Contact from "../../../src/screens/Contact/Contact";

describe('Pruebas en <Contact>', () => { 
    
  test('debe de hacer match con el snapshot', () => {
    const view  = render ( <Contact/>
    )
    expect(view).toMatchSnapshot();
  });

})