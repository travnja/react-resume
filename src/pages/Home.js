import Introduction from "../components/layout/Introduction";
import ProfileInformation from "../components/layout/ProfileInformation";
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
