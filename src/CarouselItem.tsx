export const CarouselItem = ({ item }: any) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img src={item.icon} alt="No image @@" className="carousel-img" />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};
