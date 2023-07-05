import Carousel from './Carousel'

export default function CarouselWrapper({ cards, height offset, showArrows }) {

  return (
    <div style={{ height }}>
      <Carousel
        cards={cards}
        height={height}
        offset={offset}
        showArrows={showArrows}
      />
    </div>
  );
}
