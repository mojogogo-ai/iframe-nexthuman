import './App.css';

function App() {
    return (
        <div className="App">
            <div className="iframe-container">
                <iframe
                    src="https://nexthuman.cn/api-web/#/cordwood/home/index"
                    title="Nexthuman Platform"
                    className="nexthuman-iframe"
                />
                <div className="custom-logo-overlay">
                    <img src="/logo.png" alt="Custom Logo" className="custom-logo"/>
                </div>
            </div>
        </div>
    );
}

export default App;

// src = https://nexthuman.cn/api-web/#/login
// src = https://nexthuman.cn/api-web/#/lives/list
