import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import logo from "./logo.svg";
import SecondPage from "./components/SecondPage";
import RefComponent from "./components/RefComponent";
import ControlComponent from "./components/ControlComponent";
import CounterHook from "./components/Counterhook";

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <img src={logo} className="w-96" alt="logo" />
        <h1 className="text-4xl font-bold">Desarrollo web con React - IECA</h1>
        <div className="flex gap-4 py-4">
          <Link to="/hola-mundo" className="font-bold text-2xl text-blue-700">
            Hola Mundo
          </Link>
          <Link to="/otra-pagina" className="font-bold text-2xl text-blue-700">
            Otra página
          </Link>
          <Link to="/ref-component" className="font-bold text-2xl text-blue-700">
            ref component
          </Link>

          <Link to="/control" className="font-bold text-2xl text-blue-700">
          control component
          </Link>

          
          <Link to="/customhook" className="font-bold text-2xl text-blue-700">
          CounterHook
          </Link>
          
        </div>
        <Routes>
          <Route path="/hola-mundo" exact element={<HelloWorld />} />
          <Route path="/otra-pagina" exact element={<SecondPage />} />
          <Route path="/ref-component" exact element={<RefComponent/>}/>
          <Route path="/control" exact element={<ControlComponent/>}/>
          <Route path="/customhook" exact element={<CounterHook/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
