import React, { useEffect } from "react";
import s from './Slider.module.scss';
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

const Slider = () => {
  const x:any = useMotionValue(0);
    const xInput = [-50, 0, 50];
    const backgroundColor = useTransform(x, xInput, [
      "#e71d3626",
      "#9b5de526",
      "#02c39a26"
    ]);
    const rotate = useTransform(
        x,
        [0, 100],
        [0, 10],
        { clamp: false }
      )
    return(
        <motion.div className={s.SliderScreen}  style={{ backgroundColor }}>
            <div className={s.Slider_Items}>
            <motion.div>
      <motion.div className={s.container} id='slide'
      style={{ x }}
      dragConstraints={{ left: 0, right: 0 }}
      drag="x">
      <motion.img className={s.Slider_Card} style={{rotate, x}} src='https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/360'/>
      </motion.div>
      <div className={s.container_buttons}>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.2 100.2 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm34.8-121.2L133.7 128l29.1 29.2a3.9 3.9 0 0 1 0 5.6a3.9 3.9 0 0 1-5.6 0L128 133.7l-29.2 29.1a3.9 3.9 0 0 1-5.6 0a3.9 3.9 0 0 1 0-5.6l29.1-29.2l-29.1-29.2a4 4 0 0 1 5.6-5.6l29.2 29.1l29.2-29.1a4 4 0 1 1 5.6 5.6Z"/></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M174.9 101.2a4.1 4.1 0 0 1-.1 5.7l-58.7 56a4.3 4.3 0 0 1-2.8 1.1a3.9 3.9 0 0 1-2.7-1.1l-29.4-28a4 4 0 1 1 5.6-5.8l26.5 25.4l55.9-53.4a4.1 4.1 0 0 1 5.7.1ZM228 128A100 100 0 1 1 128 28a100.2 100.2 0 0 1 100 100Zm-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92Z"/></svg></button>
      </div>
      </motion.div>
            </div>
        </motion.div>
    )
}

export default Slider