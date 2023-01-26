import "./App.css";

import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

function App() {
    return (
        <div className="layout">
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <Content />
            </div>
        </div>
    );
}

export default App;
