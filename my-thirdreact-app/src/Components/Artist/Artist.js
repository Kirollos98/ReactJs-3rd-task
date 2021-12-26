import { Link } from "react-router-dom";
import "./Artist.css";

const Artist = ({artistInfo})=>{

    if (artistInfo)

        return (
            <div className="alert alert-dark m-2 position-relative col-8 mx-auto">
                <Link to={`/artists/${artistInfo.id}`}>
                    <img src={`images/covers/${artistInfo.cover}.jpg`} className="img-fluid" alt="NA"/>
                </Link>
                <div className="bg-primary p-3 text-center position-absolute bottom-5 name-tag">
                    {artistInfo.name}
                </div>
            </div>
        )
        return <p className="alert alert-danger">No Artist info available</p>
}
export default Artist;