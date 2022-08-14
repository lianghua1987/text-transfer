import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <label>Windows -> Mac Message Connector</label><br/>
                <div>
                    <textarea rows="5" onChange={onChange}></textarea>
                    <p className="info">
                        {value}
                    </p>
                </div>

            </header>
        </div>
    );
}

export default App;
