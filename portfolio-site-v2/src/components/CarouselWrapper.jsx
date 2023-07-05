import Carousel from './Carousel'

export default function CarouselWrapper({ cards, height, width, offset, showArrows }) {

  return (
    <div style={{ height }}>
      <Carousel
        cards={cards}
        height={height}
        width={width}
        offset={offset}
        showArrows={showArrows}
      />
    </div>
  );
}
