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
            <a href="https://www.flaticon.com/free-icons/school" title="school icons">
                School icons created by Smashicons - Flaticon
            </a>
        </div>
    );
}

export default App;
