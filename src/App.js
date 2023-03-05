import './App.css';
import Desktop from "./components/desktop/Desktop";
import CardsController from "./store/CardsController";
import Counter from "./components/counter/Counter";

function App() {
    const {initCards} = CardsController
    const onClickButton = () =>{
        initCards(8)
    }
    return (
        <div className="App">
            <button onClick={onClickButton}>init</button>
            <Counter/>
            <Desktop/>
        </div>
    );
}

export default App;
