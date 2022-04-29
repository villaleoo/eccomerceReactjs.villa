import { Header } from "./componentes/header/Header";
import {Footer} from "./componentes/footer/Footer"
import { Main } from "./componentes/main/Main"
import axios from "axios";



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
  
  export default App;
  