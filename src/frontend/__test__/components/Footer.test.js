import React from 'react';
import { mount } from 'enzyme';
import {create} from "react-test-renderer"
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
   
  test('Footer Snapshot', () => {
     const footer = create(<Footer />);
     expect(footer.toJSON()).toMatchSnapshot();
 });
  

});

// la primera vez que se corre la prueba expect(footer.toJSON()).toMatchSnapshot(); crea un snapshot del nodo completo
// las siguientes veces comprar el snapshot creado con lo que tenga el nodo actualmente
// si no coninciden falla la prueba
// para actualizar el snapshot se corre el comando: jest --updateSnapshot
