import Link from "next/link"
import Movie from "./Movie"


export default async function Movies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await res.json()
    
  return (
    <div>
        <h1 className="text-center inline p-2 bg-yellow-500">Popular Movies</h1>
        <div className="grid gap-10 grid-cols-fluid">
            {data.results.map(movie=>{
                return (
                    <Link href={`${movie.id}`}>
                        <Movie movie={movie}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
