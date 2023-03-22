import { Link } from "react-router-dom";
import defaultImg from '../assets/default.svg'

export default function MovieCard({ id, name, path, loc="" }) {
  const nloc = "movies"
  
  if(loc === '/'){
    loc = nloc
  }
  
  const img = (path)?`https://image.tmdb.org/t/p/original/${path}`:defaultImg;
  return (
    <>
      <Link to={loc?`${loc}/${id}`:`${id}`}>
        <div
          className="card p-2 m-4 border-gray-600 border rounded-lg hover:shadow-lg 
      bg-gray-800"
        >
          <img className="rounded" src={img} alt="img" />
          <div className="info flex justify-center my-2 items-center text-white">
            <p className="text-lg title font-semibold truncate text-center">{name}</p>
          </div>
        </div>{" "}
      </Link>
    </>
  );
}
