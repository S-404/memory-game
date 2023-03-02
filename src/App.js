import './App.css';
import Desktop from "./components/desktop/Desktop";
import CardsController from "./store/CardsController";

function App() {
    const {initCards} = CardsController
    const onClickButton = () =>{
        initCards(8)
    }
    return (
        <div className="App">
            <button onClick={onClickButton}>init</button>
            <Desktop/>
        </div>
    );
}

export default App;
