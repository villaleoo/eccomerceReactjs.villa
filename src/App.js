import { Header } from "./componentes/header/Header";
import {Footer} from "./componentes/footer/Footer"
import { Main } from "./componentes/main/Main"



function App() {
  return (
    <div className="App">
      <Header/>
      <Main 
        greeting={"Bienvenido a mi e-commerce"}
        />
      <Footer/>
    </div>
  );
}
  
  export default App;
  