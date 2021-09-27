import Head from "next/head"
import Instagram from "../components/icons/Instagram"
import Youtube from "../components/icons/Youtube"
import RightArrow from "../components/icons/RightArrow"
import Android from "../components/icons/Android"
import StyledLandingPage from "../styles/components/StyledLandingPage"

const LandingPage = () => {

    const title = "The Demo"
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia. Ullam, nihil soluta? Repellat, fugit amet possimus perspiciatis harum nemo reprehenderit distinctio minima iste corporis dolor obcaecati deleniti veniam soluta!"
    
    return (
        <StyledLandingPage>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title"/>
				<meta name="description" content={description}/>
                <meta property="og:description" content={description} key="description"/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
			</Head>
            <header>
                <div className="sub-container">
                    <div className="title"><em>the</em> <span>D</span>emo<span>.</span></div>
                    <div className="icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube/></a>
                    </div>
                </div>
            </header>
            <div className="intro">
				<div className="words">
					<h1>Placeholder title, <br/>this is a title</h1>
					<h2>Movie, Music, Art, Photography & What not. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ratione.</h2>
					<a href="" className="call-to-action"><span>Sign in / Register <RightArrow/></span></a>
				</div>
				<div className="image">
					<img src="/media/banner.png" alt="The Project illustration banner"/>
				</div>
			</div>
            <section className="section movie">
                <div className="words">
                    <h3>Buy & watch movies <br/>on demand</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia. Ullam, nihil soluta? Repellat, fugit amet possimus perspiciatis harum nemo reprehenderit distinctio minima iste corporis dolor obcaecati deleniti veniam soluta!</p>
                </div>
                <div className="image">
                    <img src="/media/movie-illustration.png" alt="Movie illustration"/>
                </div>
            </section>
            <section className="section music">
                <div className="words">
                    <h3>Get access to newly released music</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia. Ullam, nihil soluta? Repellat, fugit amet possimus perspiciatis harum nemo reprehenderit distinctio minima iste corporis dolor obcaecati deleniti veniam soluta!</p>
                </div>
                <div className="image">
                    <img src="/media/music-illustration.png" alt="Music illustration"/>
                </div>
            </section>
            <section className="section art">
                <div className="words">
                    <h3>Discover art from the most talented artists</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia. Ullam, nihil soluta? Repellat, fugit amet possimus perspiciatis harum nemo reprehenderit distinctio minima iste corporis dolor obcaecati deleniti veniam soluta!</p>
                </div>
                <div className="image">
                    <img src="/media/art-illustration.png" alt="Art illustration"/>
                </div>
            </section>
            <section className="section photography">
                <div className="words">
                    <h3>Find pro photos from pro photographers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia. Ullam, nihil soluta? Repellat, fugit amet possimus perspiciatis harum nemo reprehenderit distinctio minima iste corporis dolor obcaecati deleniti veniam soluta!</p>
                </div>
                <div className="image">
                    <img src="/media/photography-illustration.png" alt="Photography illustration"/>
                </div>
            </section>
            <div className="last-section">
                <h3>Let&spos;s get started, shall we!!</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus id ad modi fugiat tempore voluptatem delectus itaque quibusdam voluptates odit.</p>
                <div className="call-to-actions">
                    <a href=""><span>Sign in / Register <RightArrow/></span></a>
                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer"><span>Download the app <Android/></span></a>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; 2021 by <div className="title"><em>the</em> <span>D</span>emo<span>.</span></div></p>
            </footer>
        </StyledLandingPage>
    )

}

export default LandingPage