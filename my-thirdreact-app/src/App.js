// import logo from './logo.svg';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import './App.css';
import ArtistDetails from './Components/ArtistDetails/ArtistDetails';
import ArtistList from './Components/ArtistList/ArtistList';

function App() {
  /// adding 1
  /// adding 2
  /// adding 3
  return (
    <div >
<BrowserRouter>
<Link className="text-decoration-none" to="/"><h1 className="bg-dark text-white text-center p-2">ArtistsDemo</h1></Link>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Switch>
                            <Route path="/artists/:id" component={ArtistDetails} />
                            <Route path="/artists" component={ArtistList} />
                            <Route exact path="/" component={ArtistList}/>
                            <Route path="*" component={()=>{
                              return (
                                <div>
                                  Not Found !!!!!
                                </div>
                              )
                            }} />
                        </Switch>
                    </div>
                </div>
            </div>

        </BrowserRouter>

    </div>
  );
}

export default App;
