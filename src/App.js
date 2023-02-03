import Card from "./components/Cards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { data } from "./data.js";

export default function App ()
{
  let props = data.map( i =>
  {
    return (
      <Card
      key={i.id}
      // data={i}
      {...i}
      />
    );
  } );
  console.log( data );
  return (
    <div className="airbnb">
      <div className="container">
        <Navbar />
        <Hero />
        <div className="cards">
          { props }
        </div>
      </div>
    </div>
  );
}

