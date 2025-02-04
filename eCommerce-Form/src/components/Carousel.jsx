

  const Carousel = () => {
    return (
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel"  style={{ height: '680px', overflow: 'hidden' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/hero1.jpeg"
              className="d-block w-100"
              alt="Novedad 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero2.jpeg"
              className="d-block w-100"
              alt="Novedad 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero4.jpg"
              className="d-block w-100"
              alt="Novedad 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero3.jpeg"
              className="d-block w-100"
              alt="Novedad 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero5.jpg"
              className="d-block w-100"
              alt="Novedad 5"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    );
  };

  export default Carousel;
