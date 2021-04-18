import React from "react"

let SearchMovies = () => {
    return (
        <div>
            <form className="form">
                <label htmlFor="query" className="label"> 
                    Movie Name
                    <input className="search" type="text" name="query" placeholder="Search Movie Here"></input>
                </label>
                <button classname="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovies