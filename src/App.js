import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className='App'>
      <div>
      <Nav/>
      <Banner/>
      <Row Title={"NETFLIX ORIGINALS" } fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row Title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
      <Row Title={"Top Rated"} fetchUrl={requests.fetchTopRatedMovies} />
      <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row Title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default App;
