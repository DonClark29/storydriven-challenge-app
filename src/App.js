import "./App.scss";
import HeaderHero from "./components/HeaderHero";
import ImgFullWidth from "./components/ImgFullWidth";
import TextFullWidth from "./components/TextFullWidth";
import Form from "./components/Form";
// import FormBg from "./images/MCDS_TeaserWeb_formBG.jpg";
// import HeroImg from "./images/MCDS_Web_Residences_hero2.jpg";
// import ImgFW from "./images/MCDS_Web_Residences_couple_sunset.jpg";
import Slider from "./components/Slider";
// import ImgSlide1 from "./images/MCDS_Web_Residences_3_InteriorRendering.jpg";
// import ImgSlide2 from "./images/MCDS_Web_Residences_2_InteriorRendering.jpg";
// import ImgSlide3 from "./images/MCDS_Web_Residences_livingroom.jpg";
// import ImgSlide5 from "./images/MCDS_Web_Residences_view02b.jpg";
// import ImgSlide6 from "./images/MCDS_Web_Residences_view03c.jpg";
import TwoCol from "./components/TwoCol";
// import TwoColIcon from "./images/MCDS_Web_Residences_wind.svg";
// import TwoColImg from "./images/MCDS_Web_Residences_terrace3.jpg";
import { useEffect, useState } from "react";

function App() {
  const API_URL = "http://localhost:3500/images";
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const heroImg = images[0];
  const sliderImgArray = [images[1], images[2], images[3]];
  const sliderImgArray2 = [images[4], images[5]];
  const fullWidthImg = images[6];
  const windIcon = images[7];
  const patioImg = images[8];
  const formBgImg = images[9];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did receive data");
        const listImages = await response.json();
        setImages(listImages);
        setLoading(false);
      } catch (err) {
        console.log(err.stack);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="App">
      <HeaderHero title="Mar A cielo" image={heroImg} />
      <TextFullWidth
        //default bg set to "dark" and does not need to be explicitly set
        //Background options dark-bg and light-bg
        backgroundClass="dark-bg"
        //All text optional allowing for layouts without a title, subtitle, or even paragraph text.
        title="Baja Culture In Contemporary Design"
        subtitle="Expressing The Authenticity Of Cabo Del Sol"
        text="Mar a Cielo is Cabo del Sol’s newest real estate offering. The architecture, interiors, and landscapes of Mar a Cielo interpret Cabo Del Sol through a modern lens. From the outside in, every residence reflects the warm, luxurious climate and natural beauty of the sun-drenched Baja peninsula. Unlike many Los Cabos properties, Mar a Cielo is not branded. There are no restrictions on owner usage or prescribed property management; homeowners are free to use and rent their homes however they wish."
      />
      {/* Bootstrap carousel with a bit of logic to place proper amount of navigation icons beneath */}
      <Slider id="Slider1" images={sliderImgArray} />
      <TextFullWidth
        title="Come Home to Unforgettable Moments"
        subtitle="Intimate Real Estate, Fully-Furnished For Modern Living"
        text="Mar a Cielo is a special release of 36 modern homes. The two- and three-bedroom residences feature open floorplans and oversized windows framing views of the ever-changing sea. Generous outdoor spaces invite relaxation, and family gatherings that become lasting memories. Days unfold in harmony with nature. Thoughtful design brings the colors, textures, and traditions of Baja into each and every home."
      />
      <ImgFullWidth image={fullWidthImg} />
      <TwoCol
        backgroundClass="light-bg"
        image={patioImg}
        //icon is optional
        icon={windIcon}
        //boolean used to control layout
        textLeft={true}
        title="Seamless Transitions From Outside to Inside"
        text="The Baja lifestyle makes few distinctions between the outdoors and indoors. Mar a Cielo embraces this attitude, with spaces designed to maximize ocean views, warm sea breezes, and lush plant life. Each residence extends seamlessly into open-air patios, terraces, and balconies that encourage a slower pace – and time to absorb the beauty that enfolds Cabo del Sol. Throughout the property, nature takes priority. Flourishing gardens, courtyards, lanais, and decks blur the lines between the built and natural environment."
      />
      <TextFullWidth
        backgroundClass="dark-bg"
        title="The Residences"
        subtitle="Born From Land and Culture"
        text="Mar a Cielo’s real estate offerings  embody the warmth and luxury of Los Cabos itself. They represent the very best of this land: its stunning natural beauty, diverse landscape, rich culture, and relaxed, generous way of life. The design interprets a storied past with a modern sensibility – and gives homeowners access to every amenity they could desire. The property also occupies a coveted location behind Hole #5 of Cabo del Sol Ocean Course and the forthcoming Beach Club."
      />
      <Slider id="Slider2" images={sliderImgArray2} />
      <TextFullWidth
        backgroundClass="light-bg"
        title="HOME SPECIFICATIONS"
        text="Every home comes fully furnished, with contemporary furniture designed for comfort and luxury. Your new home will have Mexican travertine flooring on all indoor and outdoor spaces, Quartz countertops, solid wood cabinetry throughout, Bosch appliances plus ceiling fans in every bedroom, living room and terraces."
      />
      <Form
        backgroundImage={formBgImg}
        title="REGISTER NOW FOR DETAILED PRICING"
        subtitle="36 MODERN OCEAN VIEW RESIDENCES.\n
2 BEDROOMS FROM $1.375M AND 3 BEDROOMS FROM $1.725M."
      />
      <footer className="footer text-center">
        © 2019 Replay Destinations. This is not an offering for sale. Mar A
        Cielo, Cabo Del Sol is developed by Cabo del Sol A-3. Renderings,
        sketches, layouts and finishes are representational only.
      </footer>
    </div>
  );
}

export default App;
