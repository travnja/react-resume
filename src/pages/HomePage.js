import Introduction from "../components/sections/Introduction";
import ProfileInformation from "../components/sections/ProfileInformation";
import Heart from "../components/UI/HeartImage";

function HomePage() {
    return (
        <div className="layout">
            <Introduction />
            <ProfileInformation />
            <Heart />
            
        </div>
    );
}

export default HomePage;
