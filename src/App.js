import './App.css';
import Desktop from "./components/desktop/Desktop";
import Counter from "./components/counter/Counter";
import Menu from "./components/menu/Menu";

function App() {

    return (
        <div className="App">
            <Menu/>
            <Counter/>
            <Desktop/>
        </div>
    );
}

export default App;
