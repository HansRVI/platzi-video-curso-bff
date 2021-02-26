import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
// describe crea algo que se llama una suit
// las suit siven para poder utilizar mas de una prueba
// si solo se va correr una prueba no se necesita crear una suit
// el primer parametro que recibe es una decripcion, un string cualquiera
describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer haves 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

});