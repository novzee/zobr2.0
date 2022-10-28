import s from './App.module.scss'
import {Routes , Route, Navigate} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import FilmPage from './pages/FilmPage/FilmPage'

function App() {
  return(
    <div className={s.App}>
      <Routes>
        <Route path='/:type' element={<MainPage/>}/>
        <Route path='/movie/:id' element={<FilmPage/>}/>
        <Route path='*' element={<Navigate to='/main'/>}/>
      </Routes>
    </div>
  )
}

export default App
