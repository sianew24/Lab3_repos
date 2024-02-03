
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);  //  using Sinon-Chai

const { expect } = chai;

// Import the matrix class
const Matrix = require('../matrix');

describe('Matrix class', () => {
  let matrixInstance;

  beforeEach(() => {
    // створення об'єкту класу matrix 
    matrixInstance = new Matrix();
  });

  it('should mock get_matrix method', () => {
    // Mock методу get_matrix 
    const getMatrixMock = sinon.stub(matrixInstance, 'get_matrix').returns([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    // виклик mocked-метода
    const result = matrixInstance.get_matrix();

    // затвердження результату 
    expect(result).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    // відновити оригінальний метод
    getMatrixMock.restore();
  });

  it('should mock printm method', () => {
    // Mock метода printm
    const printmMock = sinon.stub(matrixInstance, 'printm');

    // виклик mocked-методу
    matrixInstance.printm();

    // затвердження виклику метода
    expect(printmMock).to.have.been.calledOnce;

    //відновлення оригінального методу 
    printmMock.restore();
  });

  it('should mock get_rows() ', () => {
    // Створення мок-об'єкта
    //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

    // Мокування методу get_rows() 
    const getRowsMock = sinon.stub(matrixInstance, 'get_rows');
    getRowsMock.returns(5); // Наприклад, можна повертати фіксоване значення для тесту

    // Виклик методу та перевірка результата
    const result = matrixInstance.get_rows();
    expect(result).to.equal(5);

    // Перевірка, чи метод був викликаний
    expect(getRowsMock).to.have.been.calledOnce;

    // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
    getRowsMock.restore();
});

it('should mock get_cols() ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу get_cols() 
  const getColsMock = sinon.stub(matrixInstance, 'get_cols');
  getColsMock.returns(5); // Наприклад,  можна повертати фіксоване значення для тесту

  // Виклик методу та перевірка результата
  const result = matrixInstance.get_cols();
  expect(result).to.equal(5);

  // Перевірка, чи метод був викликаний
  expect(getColsMock).to.have.been.calledOnce;

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  getColsMock.restore();
});

it('should mock mull_add(i, j, d) ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу mull_add(i, j, d) 
  const mullAddMock = sinon.stub(matrixInstance, 'mull_add');

  // Виклик методу
  const i = 0;
  const j = 1;
  const d = 2;
  matrixInstance.mull_add(i, j, d);

  // Перевірка, чи метод був викликаний з вірними аргументами
  expect(mullAddMock).to.have.been.calledWith(i, j, d);

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  mullAddMock.restore();
});

it('should mock exists_wrong_row() ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу exists_wrong_row() 
  const existsWrongRowMock = sinon.stub(matrixInstance, 'exists_wrong_row');
  existsWrongRowMock.returns(true); // Наприклад, можна повертати фіксоване значення для тесту

  // Виклик методу та перевірка результата
  const result = matrixInstance.exists_wrong_row();
  expect(result).to.equal(true);

  // Перевірка, чи метод був викликаний
  expect(existsWrongRowMock).to.have.been.calledOnce;

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  existsWrongRowMock.restore();
});

it('should mock exists_zero_row() ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу exists_zero_row() 
  const existsZeroRowMock = sinon.stub(matrixInstance, 'exists_zero_row');
  existsZeroRowMock.returns(true); // Наприклад, можна повертати фіксоване значення для тесту

  // Виклик методу та перевірка результата
  const result = matrixInstance.exists_zero_row();
  expect(result).to.equal(true);

  // Перевірка, чи метод був викликаний
  expect(existsZeroRowMock).to.have.been.calledOnce;

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  existsZeroRowMock.restore();
});

it('should mock swap_with_nonzero_row(i) ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу swap_with_nonzero_row(i) 
  const swapWithNonzeroRowMock = sinon.stub(matrixInstance, 'swap_with_nonzero_row');
  const i = 0;
  // Виклик методу (треба передати аргумент `i`)
  matrixInstance.swap_with_nonzero_row(i);

  // Перевірка, чи метод був викликаний
  expect(swapWithNonzeroRowMock).to.have.been.calledOnce;

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  swapWithNonzeroRowMock.restore();
});

it('should mock get(i, j) ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу get(i, j) 
  const getMethodMock = sinon.stub(matrixInstance, 'get');
  // Встановлення значення, яке метод повинен повертати при виклику
  getMethodMock.withArgs(1, 2).returns(42);

  // Виклик методу (треба передати аргументи `i` та `j`)
  const result = matrixInstance.get(1, 2);

  // Перевірка, чи метод був викликаний з вірними аргументами
  expect(getMethodMock).to.have.been.calledOnceWith(1, 2);

  // Перевірка результату виклику методу
  expect(result).to.equal(42);

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  getMethodMock.restore();
});

it('should mock set(i, j, d) ', () => {
  // Створення мок-об'єкта
  //const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

  // Мокування методу set(i, j, d) 
  const setMethodMock = sinon.stub(matrixInstance, 'set');

  // Виклик методу (треба передати аргументи `i`, `j` та `d`)
  matrixInstance.set(1, 2, 42);

  // Перевірка, чи метод був викликаний з вірними аргументами
  expect(setMethodMock).to.have.been.calledOnceWith(1, 2, 42);

  // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
  setMethodMock.restore();
});

  /*it('should mock get_rows() method using Sinon', () => {
    // Створення мок-об'єкта
    const mockMatrix = new MatrixClass(3); // Припустимо, що задана матриця розміром 3x4

    // Мокування методу get_rows() 
    const getRowsMock = sinon.stub(mockMatrix, 'get_rows');
    getRowsMock.returns(5); // Наприклад, можна повертати фіксоване значення для тесту

    // Виклик методу та перевірка результата
    const result = mockMatrix.get_rows();
    console.log(result); // Очікується виведення 5

    // Перевірка, чи метод був викликаний
    sinon.assert.calledOnce(getRowsMock);

    // Повернення оригінальної реалізації методу (якщо більше не треба мокувати)
    getRowsMock.restore();
});*/

});
