import Card from "./components/Cards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Img1 from "./image/1.png";
import Img2 from "./image/2.png";
import Img3 from "./image/3.png";
export default function App ()
{
  return (
    <div className="airbnb">
      <div className="container">
        <Navbar />
        <Hero />
        <div className="cards">
          <Card
            image={ Img1 }
            rating="5.0"
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="136"
            review="6"
            country="EGY"
            sold="SOLD OUT"
          />
          <Card
            image={ Img2 }
            rating="4.0"
            country="USA"
            title="Learn wedding photography"
            price="106"
            review="5"
            country="USA"
            sold="ONLINE"
          />
          <Card
            image={ Img3 }
            rating="3.0"
            country="USA"
            title="Group in Mountain Biking"
            review="3"
            country="UK"
            price="88"
          />
        </div>
      </div>
    </div>
  );
}

