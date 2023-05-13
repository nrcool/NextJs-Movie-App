"use client"


import Image from "next/image"

export default function Movie({movie}) {
  return (
    <div className="shadow-xl">
      
        <h3 className="h-10" >{movie.title}</h3>
        <h3 className="inline-block float-right p-1 bg-gradient-to-b from-gray-400 to-green-400">{movie.release_date}</h3>
      
        <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={1000} height={1000}/>
    </div>
  )
}
