import './App.css'
import ClassCounter from "./classCounter.jsx";
import {useState} from "react";
// useState
const App = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <div>
                <button onClick={() => setValue((v) => {
                    return v + 1;
                })}> +
                </button>

                <button onClick={() => setValue((v) => {
                    return v - 1;
                })}> -
                </button>
            </div>
            <ClassCounter value={value}/>
        </div>
    )
}

export default App
