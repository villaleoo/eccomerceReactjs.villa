import GlobalStateContext from "./context/GlobalStateContext";
import { Rutas } from "./routes/Rutas";



function App() {
  return (
    <div className="App">
      <GlobalStateContext>

        <Rutas/>

      </GlobalStateContext>
    </div>
  );
}
  
  export default App;
  