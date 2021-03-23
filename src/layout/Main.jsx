import FilmList from "../components/FilmList";
import React from "react";
import Preloader from "../components/Preloader";


class Main extends React.Component {

    state = {
        searchForm: 'naruto',
        films: [],
        checked: 'all',
        sort: 'all',
        loading: true
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=61ff04a9&s=${this.state.searchForm}${this.state.sort === 'all' ? '' : `&type=${this.state.sort}`}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({films: data.Search, loading: false});
            });
    }


    handlerChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}),
            () => this.fetchFilms)
    }

    checkboxChanger = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}),
            this.fetchFilms)
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.fetchFilms()
        }
    }

    fetchFilms = () => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=61ff04a9&s=${this.state.searchForm}${this.state.sort === 'all' ? '' : `&type=${this.state.sort}`}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({films: data.Search, loading: false});
            });
    }


    render() {
        const {films, sort, loading} = this.state;
        return (
            <main className='flex-grow  bg-blue-50'>
                <div className="p-5 flex flex-col m-auto max-w-6xl">
                    <div className="relative flex-1">
                        <input type="search" name='searchForm'
                               placeholder="Title"
                               className="p-4 text-gray-700 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                               value={this.state.searchForm}
                               onChange={this.handlerChange}
                               onKeyDown={this.handleKey}/>
                        <button
                            className="bg-blue-600 text-white rounded font-lg absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold"
                            onClick={this.fetchFilms}>
                            Search
                        </button>
                    </div>
                    <div className='flex gap-20'>
                        <label className="inline-flex items-center mt-3">
                            <input type="radio" className="form-radio h-5 w-5 text-gray-600" name='sort' value='all'
                                   onChange={this.checkboxChanger} checked={this.state.sort === 'all'}/>
                            <span className="ml-2 text-gray-700">All</span>
                        </label>
                        <label className="inline-flex items-center mt-3">
                            <input type="radio" className="form-radio h-5 w-5 text-gray-600" name='sort' value='movie'
                                   onChange={this.checkboxChanger} checked={this.state.sort === 'movie'}/>
                            <span className="ml-2 text-gray-700">Movies</span>
                        </label>
                        <label className="inline-flex items-center mt-3">
                            <input type="radio" className="form-radio h-5 w-5 text-gray-600" name='sort' value='series'
                                   onChange={this.checkboxChanger} checked={this.state.sort === 'series'}/>
                            <span className="ml-2 text-gray-700">Series</span>
                        </label>
                    </div>
                    {loading === true
                        ? <div className='flex justify-center '><Preloader/></div>
                        : <FilmList films={films} sort={sort}/>}

                </div>


            </main>
        );
    }
}

export default Main;


