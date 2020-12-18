# REACT SLIDER CAROUSEL V1

## Description

This repository is a Software of Application with React.

## Installation

Using React 17.0.1 preferably.


## Usage

```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/react-slider-carousel[NAME APP]

$ yarn install 

$ yarn start
```

Follow the following steps and you're good to go! Important:

![alt text](https://i.imgur.com/LDlucK8.gif)

## Coding

### Component

```javascript
...
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="arrow-left" onClick={prevSlide} />
      <IoIosArrowForward className="arrow-right" onClick={nextSlide} />
      {DataSlider.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt="Ferrari image" className="image" />
          )}
        </div>
      ))}
    </section>
  );
};
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/react-slider-carousel. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

```

```