
import React from "react";
import { useState, useEffect } from "react";

interface Movie{
    Title: string;
    Year: string;
    Rated: string;
    Director:string;
    Plot:string;
    Awards:string;
    imdbRating:string;
    Language:string;
    Genre:string;
    Images: string[];
}
interface MovieData{
    Title: string;
    Year: string;
    Plot: string;
    Images: string[];
}

export default function Movies(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
   

    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/075b6aaba5ee43554ecd55006e5d080a8acf08fe/Film.JSON");
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Movie[] = await response.json();
                setMovies(data);
                setIsLoading(false);
            }
            catch (err:any){
                setError(err.message);
                setIsLoading(false);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchMovies();
    }, [])

    if (isLoading){
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error}</div>;
    }

    return(
        <div className="container mx-auto px-4 py-8 dark:p-20">
            <h1 className="text-5xl text-blue-400 text-center mb-8">Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    movies.map((movie, index) => (
                        <div  onClick={() => {
                            
                            
                            setSelectedMovie(movie);
                            setModal(true);
                        
                            document.getElementById('my_modal_5')?.showModal();
                            
                           
                        }} id={`movie-${index}`} style={{ cursor:"pointer"}} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                    <img
                    src={movie.Images[1]}
            alt={movie.Title} />
             </figure>
  <div className="card-body">
    <h2 className="card-title">{movie.Title}</h2>
    <p>{movie.Plot}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch Now</button>
    </div>
  </div>
</div>
                        
                    ))
                }

            </div>

            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {
                    modal ? 

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={selectedMovie?.Images[0]}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={selectedMovie?.Images[1]}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={selectedMovie?.Images[2]}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={selectedMovie?.Images[3]}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
   <div id="slide5" className="carousel-item relative w-full">
    <img
      src={selectedMovie?.Images[4]}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    <h3 className="font-bold text-lg">{selectedMovie?.Title}</h3>
    <p className="py-4">{selectedMovie?.Plot}</p>
    <p><strong>Director:</strong> {selectedMovie?.Director}</p>
    <p><strong>Awards:</strong> {selectedMovie?.Awards}</p>
    <p><strong>IMDB Rating:</strong> {selectedMovie?.imdbRating}</p>
    <p><strong>Language:</strong> {selectedMovie?.Language}</p>
    <p><strong>Genre:</strong> {selectedMovie?.Genre}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={() => setModal(false)}>Close</button>
      </form>
    </div>
  </div>
</dialog>  
: " "
}
            </div>
        </div>
    )

}