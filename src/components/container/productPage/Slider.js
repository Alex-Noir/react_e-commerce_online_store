import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";

export default function Slider(props) {
  const { id, title, category } = props.dataItem;

  const firstImg = require(`../../../img/products/data/${id}/01.webp`);
  const secondImg = require(`../../../img/products/data/${id}/02.webp`);
  const thirdImg =
    category === "Mobile Phones"
      ? require(`../../../img/products/data/${id}/03.webp`)
      : null;

  const firstSlide = [
    { src: firstImg, setting: "400w" },
    { src: firstImg, setting: "1000w" },
  ]
    .map((item) => `${item.src} ${item.setting}`)
    .join(", ");

  const secondSlide = [
    { src: secondImg, setting: "400w" },
    { src: secondImg, setting: "1000w" },
  ]
    .map((item) => `${item.src} ${item.setting}`)
    .join(", ");

  const thirdSlide = [
    { src: thirdImg, setting: "400w" },
    { src: thirdImg, setting: "1000w" },
  ]
    .map((item) => `${item.src} ${item.setting}`)
    .join(", ");

  const { rsProps } = props;

  const dataSource = [
    {
      srcSet: firstSlide,
      small: firstImg,
      large: firstImg,
    },
    {
      srcSet: secondSlide,
      small: secondImg,
      large: secondImg,
    },
  ];

  const dataSourceMobilePhones = [
    {
      srcSet: firstSlide,
      small: firstImg,
      large: firstImg,
    },
    {
      srcSet: secondSlide,
      small: secondImg,
      large: secondImg,
    },
    {
      srcSet: thirdSlide,
      small: thirdImg,
      large: thirdImg,
    },
  ];

  return (
    <ReactSlick
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }}
      {...rsProps}
    >
      {category === "Mobile Phones"
        ? dataSourceMobilePhones.map((src, index) => (
            <React.Fragment key={index}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: { title },
                    isFluidWidth: true,
                    src: src.small,
                    srcSet: src.srcSet,
                    sizes:
                      "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                  },
                  largeImage: {
                    src: src.large,
                    width: 1000,
                    height: 1000,
                  },
                  lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                }}
                {...{
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: "over",
                }}
              />
            </React.Fragment>
          ))
        : dataSource.map((src, index) => (
            <React.Fragment key={index}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: { title },
                    isFluidWidth: true,
                    src: src.small,
                    srcSet: src.srcSet,
                    sizes:
                      "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                  },
                  largeImage: {
                    src: src.large,
                    width: 1000,
                    height: 1000,
                  },
                  lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                }}
                {...{
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: "over",
                }}
              />
            </React.Fragment>
          ))}
    </ReactSlick>
  );
}
