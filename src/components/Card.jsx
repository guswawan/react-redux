import PropTypes from 'prop-types';

export const Card = ({ name, price, imageUrl, stock }) => {
  return (
    <div className="aspect-square w-fit border">
      <div className="scale-90 hover:scale-100 transition ease-in-out delay-50 duration-300">
        <img src={imageUrl} alt="image-product" />
      </div>
      <div className="border-t-2 p-2 leading-loose flex flex-col justify-between">
        <p className="text-lg font-semibold min-h-[38px] leading-tight">
          {name}
        </p>
        <p className="mt-2">Rp{price.toLocaleString('id-ID')}</p>
        <p className="text-xs text-gray-300">In stock: {stock}</p>
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
