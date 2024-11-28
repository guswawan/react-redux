import { Button } from './ui/button';
import { Input } from './ui/input';
import { IoCart, IoHeart } from 'react-icons/io5';
import { Separator } from './ui/separator';

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-24 border-b-2">
      <div className="hover:cursor-pointer leading-none">
        <p className="font-extrabold text-2xl leading-none tracking-tighter">
          OnWinkel
        </p>
        <p className="leading-none text-end"> 岡ヲヮ≋- site</p>
      </div>
      <Input className="max-w-[50%]" placeholder="Search Product..." />
      <div className="flex space-x-4 h-6 items-center">
        <div>
          <Button
            size="icon"
            variant="transparent"
            className="hover:scale-150 transition ease-in-out delay-100 duration-300"
          >
            <IoCart className="scale-150" />
          </Button>
          <Button size="icon" variant="ghost">
            <IoHeart className="scale-150" />
          </Button>
        </div>
        <Separator orientation="vertical h-full" />
        <div className="space-x-2">
          <Button size="lg">Log In</Button>
          <Button variant="link">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
