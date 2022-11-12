import Header from "./components/Header";
import Home from "./components/Home";
import {Provider} from 'react-redux'
import {store} from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
