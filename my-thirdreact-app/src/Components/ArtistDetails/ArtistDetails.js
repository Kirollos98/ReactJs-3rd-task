import { useState, useEffect } from 'react'

const ArtistDetails = ({match})=>{
    console.log(match)
    let [artist, setArtist] = useState({})
    let url = "http://localhost:3033/artists";


    useEffect( async ()=>{
        try{
            let response = await fetch(`${url}/${match.params.id}`);
            let data = await response.json()
            setArtist(data)
        }catch(err){
            console.log(err)
        }
        
    },[])

    
const renderAbums = ()=>{
    return    
}

    // public\images\covers\madonna.jpg
    if (artist.id) {
        console.log(artist)
        return (
            <div className="container">
                <div className="row m-auto text-center">
                    <div className="col-12">
                        <img src={`/images/covers/${artist.cover}.jpg`} alt="NA" width="20%" className="img-fluid "/>    
                    </div>
                    <div className="col-12 ">
                        <h2>{artist.name}</h2>
                        <p>{artist.bio}</p>
                    </div>
                    <div className="col-10 m-auto text-center">
                        {artist.albums.map((albmCover)=>{
                            return (
                                <img src={`/images/albums/${albmCover.cover}.jpg`} width="40%" alt="NA"/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    return (<p className="alert alert-danger">
        no artist info available
    </p>)

    // useEffect(async () => {
    //     //fetch
    //     try {
    //         let response = await fetch(`${url}/${match.params.id}`);
    //         let data = await response.json()
    //         setartist(data)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])


}

export default ArtistDetails