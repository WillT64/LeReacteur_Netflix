const Section = (props) => {
  console.log("props", props);

  const { category, images } = props;
  console.log("~ images", images);

  return (
    <div className="section">
      <div className="carousel-title">
        <h1>{category}</h1>
      </div>
      <div className="carousel-images">
        {images.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem} alt="movie-img" className="image"></img>
            </div>
          );
        })}
        <div className="image">image</div>
      </div>
    </div>
  );
};

export default Section;
