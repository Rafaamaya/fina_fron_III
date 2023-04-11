import { render } from "@testing-library/react";
import Contact from "../../../src/screens/Contact/Contact";

describe('Pruebas en <Home>', () => { 
    
  test('debe de hacer match con el snapshot', () => {
    const view  = render ( <Contact/>
    )
    expect(view).toMatchSnapshot();
  });

}) 



/* import Home from "../../../src/screens/Home/Home";
import renderer from "react-test-renderer";

describe("Pruebas en <Home>", () => {
  test("debe de hacer match con el snapshot", () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
 */