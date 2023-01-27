import Img from "../image/Group 77.png";

export default function Hearo ()
{
    return (
        <div className="hero">
            <img src={ Img } />
            <div className="desc">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
}