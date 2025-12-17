import './App.css'
import ClassComponent from "./components/ClassComponent.jsx";
import FunctionalComponent from "./components/FunctionalComponent.jsx";


// useState
const App = () => {
    return (
        <div className="app">
            <div className="components-row">
                <ClassComponent/>
                <FunctionalComponent/>
            </div>

        </div>
    )
}

export default App
