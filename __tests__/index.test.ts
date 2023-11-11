// index.test.ts
import { mensaje01, mensaje02, mensaje03 } from './index';

// Mock para la función global alert
global.alert = jest.fn();

describe('Pruebas de alertas', () => {
  beforeEach(() => {
    (global.alert as jest.Mock).mockClear();
  });

  test('mensaje01 muestra la alerta correcta', () => {
    mensaje01();
    expect(global.alert).toHaveBeenCalledWith('esto es la alerta 01');
  });

  test('mensaje02 muestra la alerta correcta', () => {
    mensaje02();
    expect(global.alert).toHaveBeenCalledWith('esto es la alerta 02');
  });

  test('mensaje03 muestra la alerta correcta', () => {
    mensaje03();
    expect(global.alert).toHaveBeenCalledWith('esto es la alerta 03');
  });
});
