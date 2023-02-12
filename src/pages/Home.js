import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Mentions from "../components/layout/Mentions";

function HomePage() {
    return (
        <div className="layout">
            <p>Hi, my name is</p>
            <h1>Honza Trávníček</h1>
            <Mentions />
        </div>
    );
}

export default HomePage;
