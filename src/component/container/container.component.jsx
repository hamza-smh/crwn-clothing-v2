import "./container.styles.scss";
import hero from "F:/AMProtocol/project/my-app/src/brand/assets/img/hero.png";
import GetStartedButton from "../get-started-button/getStartedbutton";
import Navigation from "../navigation/navigation";

const Container = () => {
return(
    <div className="contain" id="contain">
        < Navigation />
        <div className="holder col-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="holder1" data-aos="fade-up" data-aos-delay="200">
            <div className="text-holder">
                <h1>Building Cutting Edge SaaS Solutions</h1>
                <h2>We are team of talented technology enthusiasts helping business with digital automation</h2>
                <div className="links d-flex justify-content-center justify-content-lg-start">
                    < GetStartedButton buttonType = "inverted" href="#about" />
                    <div className="watch-video">
                            <a  className="glightbox btn-watch-video">
                                <i className="play-video fa fa-play-circle-o"></i>
                                <span className = "watch-video-text" > Watch Video </span>
                            </a>
                        </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        <div className="holder col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="img-holder" data-aos="fade-up" data-aos-delay="200">
            < img src ={hero} className = "img-hero animate" id = "hero" alt = ""/>
        </div>
        
    </div>
);
}
export default Container;