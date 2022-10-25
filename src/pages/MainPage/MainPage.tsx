import s from './MainPage.module.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useState, useEffect } from 'react'

const MainPage = () => {
    const [items, setItems] = useState<any[]>([])
    const [pages, setPages] = useState(0)
    const [title, setTitle] = useState('Рекомендации')
  
    interface films{
      data: Film[],
      pagesCount: number,
      films: Film[]
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
  
    useEffect(() => {
      axios.get<films>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`,
            {headers: {
              'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
              'Content-Type': 'application/json',
            }}
            )
            .then(function(responce) {
              console.log(responce.data)
              console.log(responce.data.films)
              setItems([...responce.data.films])
              setPages(responce.data.pagesCount)
              console.log(pages)
            }
            )
      }
    , []);
  
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
              console.log(responce.data)
              setItems([...responce.data.films])
              setTitle('найдено')
            }
            )}
          } 
        }
      >
        <Form className={s.Form}>
          <Field className='input' placeholder='Введите Название' name="Name" />
          <button type="submit">поиск</button>
        </Form>
      </Formik>
          <div className={s.Top}>
            {title}
          </div>
        </div>
          <div className={s.Items}>
            {items.map((el) => (
              <div className={s.Item}>
                <div className={s.Item_img} style={{backgroundImage: `url(${el.posterUrlPreview})`}}><div className={s.back}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                  </div></div>
                <p>{el.nameRu}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.RightSide}>
          <h1>ZOBR</h1>
          <ul>
            <li>Фильмы</li>
            <li>Сериалы</li>
            <li>Аниме</li>
          </ul>
          <ul className={s.soon}>
            <li>Понравилось</li>
            <li>Просмотренные</li>
          </ul>
          <svg className={s.burger} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"/></svg>

        </div>
        </div>
    )
} 

export default MainPage