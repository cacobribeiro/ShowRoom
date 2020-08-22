import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../Loading';

function Carousel(props) {
  const pictures = props.pictures;
  const settings = props.settings;
  const loading = useSelector((state) => state.dataCart.idLoading);

  const settingsDisplay = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToScroll: 1,
  };

  const settingsStatic = {
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  if (loading) return <Loading />;
  return (
    <Slider {...(settings === 'static' ? { ...settingsStatic } : { ...settingsDisplay })}>
      {pictures.map((e) => (
        <img src={e.url} alt={e.id} />
      ))}
    </Slider>
  );
}

export default Carousel;
