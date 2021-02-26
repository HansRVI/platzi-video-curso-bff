// ------ Configuracion para que enzyme pueda trabajar con react -----
import { configure } from "enzyme"; //libreria de airbnb para montar componentes indivuduales y poder probarlos hacerles test
// react-16 porque estamos utilizando esta version en nuestro proyecto
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter });