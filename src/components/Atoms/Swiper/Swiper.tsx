import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SwiperPropsType, dotTypes } from './Swiper.types';
import { useCarouselSize } from '../../../hooks';

const Swiper: React.FC<SwiperPropsType> = ({ ...props }) => {
  const { imageList } = props;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transX, setTransX] = useState(0);
  const [animate, setAnimate] = useState(false);
  const slideList = [imageList.at(-1), ...imageList, imageList.at(0)];

  const { ref: carouselRef, width, height } = useCarouselSize();

  return (
    <Container ref={carouselRef}>
      <Carousel
        style={{
          transform: `translateX(${-currentIndex * width + transX}px)`,
          transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
        }}
        {...SwiperDragEvent({
          onDragChange: deltaX => {
            setTransX(inRange(deltaX, -width + 10, width - 10));
          },
          onDragEnd: deltaX => {
            const maxIndex = slideList.length - 1;

            if (deltaX < -100) setCurrentIndex(inRange(currentIndex + 1, 0, maxIndex));
            if (deltaX > 100) setCurrentIndex(inRange(currentIndex - 1, 0, maxIndex));

            setAnimate(true);
            setTransX(0);
          },
        })}
        onTransitionEnd={() => {
          setAnimate(false);
          if (currentIndex === 0) {
            setCurrentIndex(slideList.length - 2);
          } else if (currentIndex === slideList.length - 1) {
            setCurrentIndex(1);
          }
        }}
      >
        {slideList &&
          slideList.map((url, i) => (
            <div key={i}>
              <img draggable={false} src={url} alt="img" width={width} />
            </div>
          ))}
      </Carousel>
      <CarouselDotContainer>
        {imageList.map((value: string, index: number) => (
          <CarouselDot key={index} current={currentIndex === index + 1} />
        ))}
      </CarouselDotContainer>
    </Container>
  );
};

export default Swiper;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
`;

const CarouselDotContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  z-index: 10000;
`;

const CarouselDot = styled.div<dotTypes>`
  padding: 0.625rem;
  margin: 0 0.625rem;
  border-radius: 50%;
  background: ${({ current }) => (current ? '#000' : '#fff')};
  cursor: pointer;
`;

const inRange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

function SwiperDragEvent({
  onDragChange,
  onDragEnd,
  stopPropagation,
}: {
  onDragChange?: (deltaX: number, deltaY: number) => void;
  onDragEnd?: (deltaX: number, deltaY: number) => void;
  stopPropagation?: boolean;
}) {
  if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
        if (stopPropagation) touchEvent.stopPropagation();

        const touchMoveHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const deltaX = moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
          const deltaY = moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
          onDragChange?.(deltaX, deltaY);
        };

        const touchEndHandler = (moveEvent: TouchEvent) => {
          const deltaX =
            moveEvent.changedTouches[0].pageX - touchEvent.changedTouches[0].pageX;
          const deltaY =
            moveEvent.changedTouches[0].pageY - touchEvent.changedTouches[0].pageY;
          onDragEnd?.(deltaX, deltaY);
          document.removeEventListener('touchmove', touchMoveHandler);
        };

        document.addEventListener('touchmove', touchMoveHandler, { passive: false });
        document.addEventListener('touchend', touchEndHandler, { once: true });
      },
    };
  }

  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragChange?.(deltaX, deltaY);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragEnd?.(deltaX, deltaY);
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
  };
}
