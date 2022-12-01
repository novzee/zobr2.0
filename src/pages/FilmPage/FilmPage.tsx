import s from './FilmPage.module.scss'
import { Link, useParams } from "react-router-dom";
import roll from '../../assets/roll3.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';


const FilmPage = () => {
    const [info, setInfo] = useState<any>({})
    const [genres, setGenres] = useState<any>([])
    const {id} = useParams()
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
    useEffect(()=>{
        axios.get(url,
            {headers: {
                'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
                'Content-Type': 'application/json',
              }}
              )
              .then(function(responce) {
                setInfo(responce.data)
                console.log(responce.data)
                console.log(info)
                setGenres([...responce.data.genres])
                console.log(genres)
              }
              )
    }, [])
    return(
        <div className={s.FilmPage}>
            <div className={s.LeftSide}>
                <div className={s.window}>
                    <img src={roll}/>
                    <iframe src={`https://2554888813.svetacdn.in/N7TuPYwQNCQx?kp_id=${id}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className={s.info}>
                    <h1>{info.nameRu}</h1>
                    <p>{info.year}</p>
                </div>
                <div className={s.genres}>
                    {genres.map((e:any) => {return(<h3 className={s.h3}>·{e.genre}</h3>)})}
                </div>
                <p className={s.description}>
                    {info.description}
                </p>
            </div>
            <div className={s.RightSide}>
                <Link to='/movie'><h1>zobr</h1></Link>
            </div>
        </div>
    )
}

export default FilmPage
