import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Movie } from '../components/Movie'
import { Nav } from '../components/Nav'
import { MOVIELIST__URL } from '../components/URLS'

import '../styles/movielist.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  const getMovieList = () => {
    fetch(MOVIELIST__URL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMovies(data.results)
      })
  }

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <main className='main__grid'>
      <Nav/>
      <section className='movielist__container'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`movie/${movie.id}`}>
            <Movie {...movie} />
          </Link>
        ))}
      </section>
    </main>
  )
}
