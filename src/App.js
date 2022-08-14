import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    // const [value, setValue] = useState('');
    const [tmp, setTmp] = useState('');
    const [history, setHistory] = useState([]);
    useEffect(() => {
        get().catch(e => console.error(e));

    }, []);

    const onChange = e => {
        setTmp(e.target.value);
    }
    const submit = () => {
        fetch('https://win-mac-connector-default-rtdb.asia-southeast1.firebasedatabase.app/values.json',
            {
                method: 'POST',
                body: JSON.stringify({value: tmp}),
                header: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
        })
    }

    const get = async () => {
        const resp = await fetch('https://win-mac-connector-default-rtdb.asia-southeast1.firebasedatabase.app/values.json?orderBy="$key"&limitToLast=1');
        const data = await resp.json();
        const histories = [];
        for (const v in data) {
            histories.push(data[v].value);
        }
        setHistory(histories);
        console.log(histories);
    }


    return (
        <div className="App">
            <header className="App-header">
                <label>Windows -> Mac Message Connector</label><br/>
                <textarea rows="5" onChange={onChange}></textarea>
                <div>
                    <button onClick={submit}>submit</button>
                    <button onClick={get}>fetch</button>

                    <ul>
                        {history.map(v => {
                            return <li>{v}</li>
                        })}
                    </ul>
                </div>

            </header>
        </div>
    );
}

export default App;
