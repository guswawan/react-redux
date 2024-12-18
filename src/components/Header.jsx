import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import IconCart from '@/assets/icons/cart.svg';
import IconHeart from '@/assets/icons/love.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center h-20 px-24 border-b-2">
      <div className="hover:cursor-pointer leading-none">
        <Link to={'/'}>
          <p className="font-extrabold text-2xl leading-none tracking-tighter">
            OnWinkel
          </p>
          <p className="leading-none text-end"> 岡ヲヮ≋- site</p>
        </Link>
      </div>
      <Input className="max-w-[50%]" placeholder="Search Product..." />
      <div className="flex space-x-4 h-6 items-center">
        <div className="space-x-1">
          <Link to={'/cart'}>
            <Button
              size="icon"
              variant="transparent"
              className="hover:scale-125 transition ease-in-out delay-100 duration-300"
            >
              <img
                src={IconCart}
                alt="icon-cart"
                className="hover:scale-110 transition ease-in-out delay-100 duration-300"
              />
            </Button>
          </Link>
          <Button size="icon" variant="ghost">
            <img src={IconHeart} alt="icon-heart" />
          </Button>
        </div>
        <Separator orientation="vertical h-full" />
        <div className="space-x-2">
          <Button onClick={handleLogin} size="lg">
            Log In
          </Button>
          <Button variant="link">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
