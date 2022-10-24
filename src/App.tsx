import { useState, useEffect } from 'react'
import axios from 'axios'
import s from './App.module.scss'
import { Formik, Form, Field } from 'formik'

function App() {
  const [items, setItems] = useState([])
  const [pages, setPages] = useState(0)
  const [title, setTitle] = useState('Рекомендации')
  useEffect(() => {
    axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`,
          {headers: {
            'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
            'Content-Type': 'application/json',
          }}
          )
          .then(function(responce:any) {
            console.log(responce.data)
            setItems([...responce.data.films])
            setPages(responce.data.pagesCount)
            console.log(pages)
          }
          )
    }
  , []);

  return (
    <div className={s.App}>
      <div className={s.LeftSide}>
      <Formik
      initialValues={{
        Name: '',
      }}
      onSubmit={
        (values) => {
          if (values.Name != '')
          {axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${values.Name}`, 
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
      <Form className='formik'>
        <Field className='input' name="Name" />
        <button type="submit">Искать фильм</button>
      </Form>
    </Formik>
        <div className={s.Top}>
          {title}
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
      </div>
    </div>
  )
}

export default App
