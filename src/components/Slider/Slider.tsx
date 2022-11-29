import React, { useEffect } from "react";
import s from './Slider.module.scss';
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"
  export const Example = () => {
    const x:any = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const color = useTransform(x, xInput, [
      "#e71d36",
      "#9b5de5",
      "#02c39a"
    ]);
    const tickPath = useTransform(x, [10, 100], [0, 1]);
    const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    const crossPathB = useTransform(x, [-50, -100], [0, 1]);
    const rotate = useTransform(
        x,
        [0, 100],
        [0, 10],
        { clamp: false }
      )
    return (
      <motion.div className={s.container} id='slide'>
      <motion.img className={s.Slider_Card} style={{rotate, x}} src='https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/360'/>
        <motion.div
          className={s.box}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          <svg className="progress-icon" viewBox="0 0 50 50">
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{ translateX: 5, translateY: 5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M14,26 L 22,33 L 35,16"
              strokeDasharray="0 1"
              style={{ pathLength: tickPath }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M17,17 L33,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathA }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M33,17 L17,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathB }}
            />
          </svg>
        </motion.div>
      </motion.div>
    );
  };


  const elem:any = document.getElementById('slide')?.style
  console.log(elem)
const Slider = () => {
    return(
        <div className={s.SliderScreen}>
            <div className={s.Slider_Items}>
                <Example/>
            </div>
            <div className={s.Slider_activity}>WOW!</div>
        </div>
    )
}

export default Slider