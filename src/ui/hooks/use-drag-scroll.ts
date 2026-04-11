import { useRef, useState } from 'react';

const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onStart = (clientX: number) => {
    if (!ref.current) return;

    setIsDragging(true);
    setHasDragged(false);

    startX.current = clientX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMove = (clientX: number) => {
    if (!isDragging || !ref.current) return;

    const x = clientX - ref.current.offsetLeft;
    const walk = x - startX.current;

    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }

    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const onEnd = () => {
    setIsDragging(false);
  };

  return {
    ref,
    hasDragged,
    events: {
      // 🖱️ Mouse
      onMouseDown: (e: React.MouseEvent) => onStart(e.pageX),
      onMouseMove: (e: React.MouseEvent) => onMove(e.pageX),
      onMouseUp: onEnd,
      onMouseLeave: onEnd,

      // 📱 Touch (mobile)
      onTouchStart: (e: React.TouchEvent) => onStart(e.touches[0].pageX),
      onTouchMove: (e: React.TouchEvent) => onMove(e.touches[0].pageX),
      onTouchEnd: onEnd,
    },
  };
};

export default useDragScroll;