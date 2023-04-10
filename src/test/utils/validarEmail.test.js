import { validarEmail } from "../../utils/validarEmail";

describe('Pruebas en validarEmail', () => { 
    
  test('validarEmail debe de retornar "true"', () => {
    const email = 'rafa.amaya82@gmail.com';
    const resultado = validarEmail(email);
    expect(resultado).toBe(true)
  });

  test('validarEmail debe de retornar "false"', () => {
    const email = 'rafa.amaya82gmail.com';
    const resultado = validarEmail(email);
    expect(resultado).toBe(false)
  });

}) 