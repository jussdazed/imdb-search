import React from 'react';
import Card from "./Card";

const FilmList = (props) => {
    const {films} = props;
    return (
        <div className="grid grid-cols-auto-fit">
            {films ? films.map((film,index) => (<Card key={index} {...film}/>))
                :<p className='p-7 font-medium text-3xl'>Nothing found</p> }
        </div>
    );
};

export default FilmList;