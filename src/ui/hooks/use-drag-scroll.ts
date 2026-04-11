import { useRef, useState, MouseEvent } from "react";

const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasDragged, setHasDragged] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onMouseDown = (e: MouseEvent) => {
    if (!ref.current) return;

    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  }

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setHasDragged(false), 0);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !ref.current) return;

    e.preventDefault();
    setHasDragged(true);

    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    ref.current.scrollLeft = scrollLeft - walk;
  }

  return {
    ref,
    isDragging,
    hasDragged,
    events: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
    }
  }
}

export default useDragScroll;