import s from './FilmPage.module.scss'
import { useParams } from "react-router-dom";


const FilmPage = () => {
    const {id} = useParams()
    return(
        <div className={s.FilmPage}>
            <div className={s.LeftSide}>
                <div className={s.window}>
                    <iframe src={`https://13.annacdn.cc/N7TuPYwQNCQx?kp_id=${id}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
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
