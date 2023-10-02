import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <img className="header-image"
      src="./src/assets/concert-header.png" width='100%' height='300px'></img>
      <h1>Concerts Near Chicago</h1>
      <div className="cards-container">
        <div>
          <Card
            name="Maná"
            date="Sunday 01 October 2023"
            image="./src/assets/mana.png"
            link="https://www.songkick.com/concerts/41002425-mana-at-united-center"
          />
        </div>
        <div>
          <Card
            name="Kiefer"
            date="Sunday 01 October 2023"
            image="./src/assets/Kiefer.jpeg"
            link="https://www.songkick.com/concerts/41322018-kiefer-at-bottom-lounge"
          />
        </div>
        <div>
          <Card
            name="Rival Consoles"
            date="04 October 2023"
            image="./src/assets/rival.jpeg"
            link="https://www.songkick.com/concerts/41189252-rival-consoles-at-sleeping-village"
          />
        </div>
        <div>
          <Card
            name="Hojean"
            date="04 October 2023"
            image="./src/assets/hojean.png"
            link="https://www.songkick.com/concerts/41210031-hojean-at-metro"
          />
        </div>
        <div>
          <Card
            name="Tangerine Dream"
            date="05 October 2023"
            image="./src/assets/tangerine.jpeg"
            link="https://www.songkick.com/concerts/41110658-tangerine-dream-at-metro"
          />
        </div>
        <div>
          <Card
            name="Hanging Hearts"
            date="05 October 2023"
            image="./src/assets/hearts.jpeg"
            link="https://www.songkick.com/concerts/41406234-hanging-hearts-at-hungry-brain"
          />
        </div>
        <div>
          <Card
            name="Livid"
            date="06 October 2023"
            image="./src/assets/livid.jpeg"
            link="https://www.songkick.com/concerts/41419027-livid-at-beat-kitchen"
          />
        </div>
        <div>
          <Card
            name="Secret Shame"
            date="07 October 2023"
            image="./src/assets/shame.jpeg"
            link="https://www.songkick.com/concerts/41331394-secret-shame-at-burlington-bar"
          />
        </div>
        <div>
          <Card
            name="Eydís Evensen"
            date="08 October 2023"
            image="./src/assets/evensen.jpeg"
            link="https://www.songkick.com/concerts/41233537-eydis-evensen-at-constellation"
          />
        </div>
        <div>
          <Card
            name="Carminho"
            date="08 October 2023"
            image="./src/assets/Carminho.jpeg"
            link="https://www.songkick.com/concerts/41430814-carminho-at-city-winery-chicago"
          />
        </div>
        <div>
          <Card
            name="Taylor Ashton"
            date="11 October 2023"
            image="./src/assets/taylor.jpeg"
            link="https://www.songkick.com/concerts/41237126-taylor-ashton-at-hey-nonny"
          />
        </div>
        <div>
          <Card
            name="The Darkness"
            date="13 October 2023"
            image="./src/assets/darkness.png"
            link="https://www.songkick.com/concerts/41196902-darkness-at-vic-theatre"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
