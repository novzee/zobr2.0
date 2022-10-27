import s from './App.module.scss'
import {Routes , Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import FilmPage from './pages/FilmPage/FilmPage'

function App() {
  return(
    <div className={s.App}>
      <Routes>
        <Route path='*' element={<MainPage/>}/>
        <Route path='/movie/:id' element={<FilmPage/>}/>
      </Routes>
    </div>
  )
}

export default App
