import s from './FilmPage.module.scss'
import { Link, useParams } from "react-router-dom";
import roll from '../../assets/roll3.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Warning from '../../components/Warning/Warning';


const FilmPage = () => {
    const [info, setInfo] = useState<any>({})
    const [genres, setGenres] = useState<any>([])
    const {id} = useParams()
    const poiskApi = import.meta.env.VITE_POISK_API_KEY
    const cdnApi = import.meta.env.VITE_CDN_API_KEY
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
    useEffect(()=>{
        axios.get(url,
            {headers: {
                'X-API-KEY': poiskApi,
                'Content-Type': 'application/json',
              }}
              )
              .then(function(responce) {
                setInfo(responce.data)
                setGenres([...responce.data.genres])
              }
              )
    }, [])
    return(
        <>
        <Warning/>
        <div className={s.FilmPage}>
            <div className={s.LeftSide}>
                <div className={s.window}>
                    <img src={roll}/>
                    <iframe src={`https://p.lumex.cloud/${cdnApi}?kp_id=${id}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className={s.info}>
                    <h1>{info.nameRu}</h1>
                    <p>{info.year}</p>
                </div>
                <div className={s.genres}>
                    {genres.map((e:any, index:number) => {return(<h3 key={index} className={s.h3}>·{e.genre}</h3>)})}
                </div>
                <p className={s.description}>
                    {info.description}
                </p>
            </div>
            <div className={s.RightSide}>
                <Link to='/movie'><h1>zobr</h1></Link>
            </div>
        </div>
        </>
    )
}

export default FilmPage
