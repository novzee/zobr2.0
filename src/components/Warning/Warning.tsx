import s from './Warning.module.scss';
import { useState} from 'react';

const Warning = () => {
    const [isVisible, setIsVisible] = useState(true);

    const hideWarning = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return(
        <div className={s.Warning} role="alert">
            <p>Если плеер не работает, попробуйте другой браузер или выберите другую страну. Спасибо за понимание)</p>
            <button onClick={hideWarning}>✖</button>
        </div>
    );
}

export default Warning;
