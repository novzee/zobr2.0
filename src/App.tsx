import s from './App.module.scss'
import {Routes , Route, Navigate} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import FilmPage from './pages/FilmPage/FilmPage'
import Slider from './components/Slider/Slider'

function App() {
  return(
    <div className={s.App}>
      <Routes>
        <Route path='/:type' element={<MainPage/>}/>
        <Route path='/movie/:id' element={<FilmPage/>}/>
        <Route path='*' element={<Navigate to='/main'/>}/>
        <Route path='/secret' element={<Slider/>}/>
      </Routes>
    </div>
  )
}

export default App
