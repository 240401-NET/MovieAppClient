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
                <div className="carousels-container">
                    <NowPlayingCarousel></NowPlayingCarousel>
                    <UpcomingCarousel></UpcomingCarousel>
                </div>
                <div className="favorites-container">
                    <FavoritesCarousel></FavoritesCarousel>
                </div>
            </div>
        </>
    )
}

export default LandingPageDashboard;