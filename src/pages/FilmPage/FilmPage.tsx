import s from './FilmPage.module.scss'

const FilmPage = () => {
    return(
        <div className={s.FilmPage}>
            <div className={s.LeftSide}>
                <div className={s.window}></div>
                <div className={s.info}>
                    <h1>Name</h1>
                    <p>2022</p>
                </div>
            </div>
            <div className={s.RightSide}>
                <h1>zobr</h1>
            </div>
        </div>
    )
}

export default FilmPage
