import { useState } from 'react'

import s from './App.module.scss'

function App() {


  return (
    <div className={s.App}>
      <div className={s.LeftSide}>
        <div className={s.Form}>
          <input/>
          <button>Поиск</button>
        </div>
        <div className={s.Top}>
          РЕКОМЕНДАЦИИ
        </div>
        <div className={s.Items}>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
          <div className={s.Item}>
            <div className={s.Item_img}></div>
            <p>Кинг конг</p>
          </div>
        </div>
      </div>
      <div className={s.RightSide}>
        <h1>ZOBR</h1>
      </div>
    </div>
  )
}

export default App
