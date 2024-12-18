import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { useState } from 'react';

export const Card = ({ name, price, imageUrl, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      return alert(
        'Kamu tidak bisa menambah item lebih dari stok yang tersedia.'
      );
    }
  };

  const decrement = () => {
    if (quantity) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    console.log('first');
  };

  return (
    <div className="aspect-square w-fit border">
      <div className="scale-90 hover:scale-100 transition ease-in-out delay-50 duration-300">
        <img src={imageUrl} alt="image-product" />
      </div>
      <div className="border-t-2 p-2 leading-loose flex flex-col">
        <p className="text-lg font-semibold leading-tight min-h-[46px]">
          {name}
        </p>
        <p className="mt-2">Rp{price.toLocaleString('id-ID')}</p>
        <p className="text-xs text-gray-300">In stock: {stock}</p>
      </div>
      <div>
        <div className="flex justify-between items-center bg-accent">
          <Button
            disabled={!stock}
            onClick={decrement}
            variant="ghost"
            size="icon"
            className="rounded-none hover:bg-white/60"
          >
            -
          </Button>
          <p>{quantity}</p>
          <Button
            disabled={!stock}
            onClick={increment}
            variant="ghost"
            size="icon"
            className="rounded-none hover:bg-white/60"
          >
            +
          </Button>
        </div>
        <Button
          className="w-full rounded-none outline outline-black"
          size="lg"
          onClick={addToCart}
          disabled={!stock || !quantity}
        >
          {stock ? 'Add to cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};
