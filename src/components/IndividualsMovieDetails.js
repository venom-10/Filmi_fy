import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Error from "./Error";
import defaultImg from '../assets/default.svg'

export default function MovieDetails() {
  const param = useParams();
  const [Details, setDetails] = useState({});
  const api = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  useEffect(() => {
    async function getDetails() {
      const response = await fetch(api);
      const data = await response.json();
      setDetails(data);
    }
    getDetails();
  }, []);

  const { title, overview, poster_path, vote_average: rating } = Details;
  

  const img = poster_path ?`https://image.tmdb.org/t/p/original/${poster_path}`:defaultImg;
  
  const [ticketDetails, setTicketDetails] = useState({
    movieName: "",
    fullName: "",
    seats: "",
  });
   

  const [showForm, setShowForm] = useState(false);

  const class1 =
    "details flex items-center gap-8 w-5/6 justify-center py-4 opacity-20 max-mob:flex-col pt-28";
  const class2 = "details flex items-center gap-8 w-5/6 justify-center py-4 max-mob:flex-col pt-28";
  const class3 = "booking_form rounded-md shadow-lg drop-shadow-lg bg-gray-600 p-8 hidden"
  const class4 = "booking_form rounded-md shadow-lg drop-shadow-lg bg-gray-600 p-8 z-20 absolute"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ticketDetails.movieName = title
    localStorage.setItem("Movie", ticketDetails.movieName);
    localStorage.setItem("Name", ticketDetails.fullName);
    localStorage.setItem("Seats", ticketDetails.seats);
    setTicketDetails({
    movieName: "",
    fullName: "",
    seats: "",
  })
  };


  return (
    <>
      {title && overview ? (
        <div className="__main bg-gray-700 dark:bg-gray-200 h-screen">
          <div className="bg-gray-700 dark:bg-gray-200 mob:h-screen flex justify-center items-center">
            <div className={!showForm ? class2 : class1}>
              <div className="details_img rounded-lg p-2 bg-gray-600">
                <img className="rounded-md" src={img} alt="img" />
              </div>
              <div className="details flex flex-col w-1/2 gap-4 h-5/6 max-mob:hidden">
                <p className="text-white font-bold text-2xl dark:text-black">
                  {title}
                </p>
                <p className="text-gray-200 font-medium text-base dark:text-gray-800">
                  {overview}
                </p>
                <div
                  className="rating flex w-full justify-end text-white dark:text-gray-800
             font-medium"
                >
                  ⭐ {rating}
                </div>
                <button
                  onClick={() => {
                    setShowForm(!showForm);
                  }}
                  className="bg-blue-700 dark:text-white px-3 font-semibold shadow-xl py-2 rounded-md hover:bg-blue-800 mt-2"
                >
                  Book A Ticket
                </button>
              </div>
              <div className="mob:hidden bg-">
                <p className="text-white font-bold text-2xl dark:text-black">
                  {title}
                </p>
                <p className="text-gray-200 font-medium text-base dark:text-gray-800">
                  {/* {overview}  */}
                </p>
                <button
                  onClick={() => {
                    setShowForm(!showForm);
                  }}
                  className="bg-blue-700 dark:text-white px-3 font-semibold shadow-xl py-2 rounded-md hover:bg-blue-800 mt-2"
                >
                  Book A Ticket
                </button>
              </div>
            </div>

            <div className={showForm ? class4 : class3}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center w-full h-full gap-8"
              >
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold text-lg">
                    Movie Name
                  </label>
                  <input
                    className="rounded-md drop-shadow-md shadow-md w-full px-3 py-2 font-semibold"
                    type="text"
                    value={title}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold text-lg">
                    Full Name
                  </label>
                  <input
                    className="rounded-md drop-shadow-md shadow-md w-full px-3 py-2 font-semibold"
                    type="text"
                    name="fullName"
                    value={ticketDetails.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold text-lg">
                    No. of Seats
                  </label>
                  <input
                    className="rounded-md drop-shadow-md shadow-md w-full px-3 py-2 font-semibold"
                    type="text"
                    name="seats"
                    value={ticketDetails.seats}
                    onChange={handleChange}
                    placeholder="1 or 2 or 3 .."
                    required
                  />
                </div>
                <button
                  onClick={() => {
                    alert("Success");
                    setShowForm(!showForm);
                  }}
                  className="bg-blue-700 px-3 font-semibold shadow-xl py-2 rounded-md hover:bg-blue-800 mt-2"
                >
                  Book A Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
