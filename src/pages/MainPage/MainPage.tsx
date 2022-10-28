import s from './MainPage.module.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useState, useEffect, SetStateAction } from 'react'
import { Link, useParams } from 'react-router-dom'

const MainPage = () => {
    const [items, setItems] = useState<any[]>([])
    const [pages, setPages] = useState(0)
    const [title, setTitle] = useState('Рекомендации')
    const {type} = useParams()
    const [typeA, setTypeA] = useState<any>('movie')
    const [burger, setBurger] = useState(false)
  
    interface films{
      data: Film[],
      pagesCount: number,
      films: Film[],
      items: Film[]
    }
    interface Film  {
      countries: any,
      filmId: number,
      genres: any,
      nameEn: string,
      nameRu: string,
      posterUrl: string,
      posterUrlPreview: string,
      rating: string,
      ratingChange: any,
      ratingVoteCount: number,
      year: string,
    }
    const series = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'
    const top = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top'
    const anime = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=24&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'
    useEffect(() => {
      setTypeA(type)
      let link = type != 'anime' ? type != 'series' ? top : series : anime
      axios.get<films>(link,
            {headers: {
              'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
              'Content-Type': 'application/json',
            }}
            )
            .then(function(responce) {
              setItems(type == 'anime' || type == 'series' ? [...responce.data.items] : [...responce.data.films])
              setPages(responce.data.pagesCount)
            }
            )
      }
    , [type]);
  
    return (
      <div className={s.MainPage}>
        <div className={s.LeftSide}>
        <div className={s.UpperSlide}>
        <Formik
        initialValues={{
          Name: '',
        }}
        onSubmit={
          (values) => {
            if (values.Name != '')
            {axios.get<films>(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${values.Name}`, 
            {headers: {
              'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
              'Content-Type': 'application/json',
            }}
            )
            .then(function(responce) {
              setItems([...responce.data.films])
              setTitle('найдено')
            }
            )}
          } 
        }
      >
        <Form className={s.Form}>
          <Field className='input' placeholder='Введите Название' name="Name" />
          <button type="submit" onClick={() => setBurger(false)}>поиск</button>
        </Form>
      </Formik>
          <div className={s.Top}>
            {title}
          </div>
        </div>
          <div className={s.Items}>
            {items.map((el) => (
              <div className={s.Item}>
                <Link to={`/movie/${type != 'movie' ? el.kinopoiskId : el.filmId}`}><div className={s.Item_img} style={{backgroundImage: `url(${el.posterUrlPreview})`}}><div className={s.back}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                  </div></div></Link>
                <p>{el.nameRu}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.RightSide}>
          <h1><Link to='/main'>ZOBR</Link></h1>
          <ul>
            <li className={typeA == 'movie' ? s.active : ''}><Link to='/movie'>фильмы</Link></li>
            <li className={typeA == 'series' ? s.active : ''}><Link to='/series'>сериалы</Link></li>
            <li className={typeA == 'anime' ? s.active : ''}><Link to='/anime' >Аниме</Link></li>
          </ul>
          <ul className={s.soon}>
            <li>Понравилось</li>
            <li>Просмотренные</li>
          </ul>
          <svg onClick={() => setBurger(!burger)} className={s.burger} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"/></svg>

        </div>
        <div className={s.mobile}>
        <div className={s.activeBurger} style={{display: burger ? 'flex' : 'none'}}>
        <ul>
            <li onClick={() => setBurger(false)} className={typeA == 'movie' ? s.active : ''}><Link to='/movie'>фильмы</Link></li>
            <li onClick={() => setBurger(false)} className={typeA == 'series' ? s.active : ''}><Link to='/series'>сериалы</Link></li>
            <li onClick={() => setBurger(false)} className={typeA == 'anime' ? s.active : ''}><Link to='/anime' >Аниме</Link></li>
          </ul>
          <ul className={s.soon}>
            <li onClick={() => setBurger(false)}>Понравилось</li>
            <li onClick={() => setBurger(false)}>Просмотренные</li>
          </ul>
        </div>
        </div>
        </div>
    )
} 

export default MainPage