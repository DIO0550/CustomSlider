import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  min?: number;
  max?: number;
  value: number;
  mouseUp?: (v: number) => void;
};

/**
 *
 * @param max 最大値
 * @param min 最小値
 * @returns
 */
const useSlider = (max: number, min: number, mouseUp?: (v: number) => void) => {
  // 値
  const [value, setValue] = useState(0);
  // 左からの位置
  const [offset, setOffset] = useState(0);
  // containerのref
  const containerRef = useRef<HTMLDivElement>(null);
  // つまみ
  const thumbRef = useRef<HTMLDivElement>(null);
  //
  const isHold = useRef<boolean>(false);

  // スライダーの移動

  const moveAt = useCallback((e: MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();

    const offsetx = e.clientX - bounds!.left;
    const diff = max - min;

    let left = 0;
    if (0 <= offsetx && offsetx <= bounds!.width) {
      left = offsetx;
    } else if (offsetx < 0) {
      left = 0;
    } else {
      left = bounds!.width;
    }
    setOffset(left);
    setValue(Math.floor(diff * (left / bounds!.width)));
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    moveAt(e);
  };

  const handleMouseUp = useCallback((e: MouseEvent) => {
    e.preventDefault();

    isHold.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (mouseUp != undefined) {
      mouseUp(value);
    }
  }, []);

  const addEventDocument = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  // マウスダウン
  const handleMouseDown = useCallback((e: MouseEvent) => {
    // デフォルトのイベント無効
    e.preventDefault();
    isHold.current = true;
    moveAt(e);

    addEventDocument();
  }, []);

  // レンダリング
  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      container.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (container !== null) {
        container.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  useEffect(() => {
    const bounds = containerRef.current?.getBoundingClientRect();
    const diff = max - min;

    let left = 0;
    left = (value * bounds!.width) / diff;
    if (0 <= left && left <= bounds!.width) {
      left = left;
    } else if (left < 0) {
      left = 0;
    } else {
      left = bounds!.width;
    }

    setOffset(left);
  }, [value]);

  return {
    value,
    setValue,
    containerRef,
    thumbRef,
    offset,
  };
};

export default useSlider;
