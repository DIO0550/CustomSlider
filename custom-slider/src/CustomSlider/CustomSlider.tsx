import styles from "./CustomSlider.module.scss";
import useSlider from "./useSlider";
import { Slider } from "@mui/material";

type Props = {
  min?: number;
  max?: number;
  value: number;
};

const CustomSlider = () => {
  //   const useSliderValue = useSlider(10, 0);

  return (
    // <>
    //   <div
    //     ref={useSliderValue.containerRef}
    //     className={styles["slider-container"]}
    //   >
    //     <div className={styles["slider-track"]}>
    //       <div
    //         className={styles["slider-progress"]}
    //         style={{
    //           width: `${useSliderValue.left}px`,
    //         }}
    //       />
    //       <div
    //         ref={useSliderValue.thumbRef}
    //         className={styles["slider-thumb"]}
    //         style={{ left: `${useSliderValue.left - 10}px` }}
    //       />
    //     </div>
    //   </div>
    <Slider min={0} max={100} components={{ Rail: "div" }} />
    // </>
  );
};

export default CustomSlider;
