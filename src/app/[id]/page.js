import Image from 'next/image'
export async function generateStaticParams(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await res.json()
    return data.results.map(movie=>({id:movie.id.toString()}))
}

export default async function page({params}) {

const res= await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`)
const movie = await res.json()
console.log(movie)
    return (
    <div className='grid gap-10 grid-cols-fluid'>
        <div className='p-10'>
            <h1 className='p-6 bg-gradient-to-b from-gray-400 to-blue-400'>{movie.title}</h1>
            <p className='p-6'>{movie.overview}</p>
            <h3 className='p-6'>{movie.popularity}</h3>
            <div>
                <h2>production_companies</h2>
                <div className='grid grid-cols-fluid'>{movie.production_companies.map((each)=>{
                    return (<div>
                    <p className='rounded bg-green-200 text-black p-2 m-1 inline-block'>{each.name}</p>
                    {each.logo_path?<Image src={`https://image.tmdb.org/t/p/original/${each.logo_path}`} width={100} height={100}/>:<Image src={"/company-logo-transparent-png-19.png"} width={100} height={100}/> }
                      
                    </div>)
                })}</div>
            </div>
        </div>
        <div className='p-10'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={1000} height={1000}/>
        </div>
    </div>
  )
}
