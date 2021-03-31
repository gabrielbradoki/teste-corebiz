import React, { Component } from 'react';
import product from "./../../data";
import Slider from "react-slick";
import Buttons from '../../components/Common/Buttons';
import formatNumber from '../../helpers/index';

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }
  ]
};

class Stock extends Component{
  state={
    produtos: [],
  }

  async componentDidMount(){
    const response = await product.get('');

    this.setState({ produtos: response.data});
  }

  render() {
    const { produtos } = this. state;
    return(
      <div className="shelf">
        <div className="shelf__container">
          <h2>Mais Vendidos</h2>
            <Slider {...settings}>
            {produtos.lenght !== 0 ?

            produtos.map((data) => {
              return (
                <div key={data.productId} className="shelf__box">
                  {data.productId === 2 || data.productId === 3 ?
                  <div className="shelf__flag">
                    <span className="flag"></span>
                  </div>
                  : '' }
                  <span className="shelf__image">
                    <img src={data.imageUrl} alt="Imagem do produto"/>
                  </span>
                  <div className="wrapper">
                  <span className={"shelf__rating-" + data.stars + " shelf__rating"}>
                  </span>
                  <span className="shelf__title">
                    {data.productName}
                  </span>

                  {data.listPrice !== null ?
                  <span className="shelf__old-price">
                    {formatNumber(data.listPrice / 100)}
                  </span>
                  : '' }

                  <span className="shelf__best-price">
                  por  {formatNumber(data.price / 100)}
                  </span>

                  {data.installments.length > 0 ?
                  <span className="shelf__installment">
                    ou em
                    <small>{(data.installments.map(item => (item.quantity )))}x</small>
                    de R$
                    <small>{formatNumber(data.installments.map(item => (item.value )) / 100 )}</small>
                  </span>
                  : <br/> }

                    <Buttons id='shelf__button' value='Comprar'></Buttons>
                    </div>
                </div>
              );
            })
              :
              'Loading...'
            }
            </Slider>
          </div>
      </div>
    );
  };
};

export default Stock;