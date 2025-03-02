import { Router, Route } from "@solidjs/router";
import { AuthProvider } from "./AuthProvider";

import Prijava from "./Prijava";
import Home from "./Home";
import Registracija from "./Registracija";
import Početna from "./Početna";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Route path="/Prijava" component={Prijava} />
        <Route path="/Registracija" component={Registracija} />
        <Route path="/Home" component={Home} />    
        <Route path="/" component={Početna} />    
      </Router>
    </AuthProvider>

  );
}

export default App;