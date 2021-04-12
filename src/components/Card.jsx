import React from 'react';

const Card = (props) => {
    const {Title: title, Poster: poster, Year: year, imdbID} = props;
    return (
        <div className="sm:px-5 p-5 my-5">
            <a href={`https://www.imdb.com/title/${imdbID}`}
               className="bg-white h-full block transform hover:scale-105 hover:shadow-2xl transition duration-700">
                <div>
                    {poster === 'N/A' ?
                        <img src={`https://via.placeholder.com/300x480?text=${title}`} alt="poster"
                             className='w-full'/> :
                        <img src={poster} alt="poster"/>}
                </div>
                <div className="px-4 py-2 mt-2 bg-white">
                    <h2 className="font-bold text-2xl text-gray-800">{title}</h2>
                    <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                        {year}
                    </p>
                </div>
            </a>
        </div>

    )
        ;
};


export default Card;
