import { Component } from "react";
import { Link } from "react-router-dom";
import Artist from "../Artist/Artist";
import "./artistList.css"
class ArtistList extends Component{

    constructor(){
        super()
        this.state = {
            artistList:[],
            errorMsg: ''
        }
    }

    // added comment 
    renderArtists({artistList,errorMsg}){
        //console.log("from the renders",artistList)
        if(artistList.length > 0){
            return artistList.map((artist)=>{
                return <Artist key={artist.id} artistInfo={artist}/>
            })
        }else if(errorMsg){
            return <p className="alert alert-danger">{errorMsg}</p>
        }


        return <p className="alert alert-danger">
        No Artists available
    </p>
    }

    render(){
        return(
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="w-75 text-center m-auto">
                            <img src="images/cover.png" className="img-fluid card-img" alt="NA"/>
                            <p className="postion-absolute mus-p card-img-overlay">MUSIC-DB</p>
                        </div>
                    </div>
                    <div className="col-12">
                        {this.renderArtists(this.state)}
                        <hr/>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:3033/artists')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    artistList: data,
                    errorMsg: ''
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({ errorMsg: 'plz try again.' })
            })
    }
}

export default ArtistList