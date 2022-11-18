import s from './FilmPage.module.scss'
import { Link, useParams } from "react-router-dom";
import roll from '../../assets/roll3.svg'


const FilmPage = () => {
    const {id} = useParams()
    return(
        <div className={s.FilmPage}>
            <div className={s.LeftSide}>
                <div className={s.window}>
                    <img src={roll}/>
                    <iframe src={`https://2554888813.svetacdn.in/N7TuPYwQNCQx?kp_id=${id}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className={s.info}>
                    <h1>Name</h1>
                    <p>2022</p>
                </div>
            </div>
            <div className={s.RightSide}>
                <Link to='/movie'><h1>zobr</h1></Link>
            </div>
        </div>
    )
}

export default FilmPage
