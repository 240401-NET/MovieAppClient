import "../Pages/LandingPage.css"
import { FavoritesCarousel } from "./Favorites";
import { MovieSearch } from "./MovieSearch";
import { NowPlayingCarousel } from "./NowPlaying";
import { UpcomingCarousel } from "./Upcoming";

const LandingPageDashboard = () => {
    return (
        <>
            <div className="landingPage-container">  
                <MovieSearch></MovieSearch>
                    <NowPlayingCarousel></NowPlayingCarousel>
                    <UpcomingCarousel></UpcomingCarousel>
                    <FavoritesCarousel></FavoritesCarousel>
            </div>
        </>
    )
}

export default LandingPageDashboard;