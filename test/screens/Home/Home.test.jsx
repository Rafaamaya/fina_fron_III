import { render } from "@testing-library/react";
import { Home } from "@mui/icons-material";

describe('Pruebas en <Home>', () => { 
    
  test('debe de hacer match con el snapshot', () => {
    const view  = render ( <Home/>)
    expect(view).toMatchSnapshot();
  });
}) 