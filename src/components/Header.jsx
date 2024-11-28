import { Button } from './ui/button';
import { Input } from './ui/input';
import { IoCart, IoHeart } from 'react-icons/io5';
import { Separator } from './ui/separator';

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-24 border-b-2">
      <p className="font-extrabold text-2xl hover:cursor-pointer">
        OnWinkelsite
      </p>
      <Input className="max-w-[50%]" placeholder="Search Product..." />
      <div className="flex space-x-4 h-6 items-center">
        <div>
          <Button size="icon" variant="ghost">
            <IoCart size={30} />
          </Button>
          <Button size="icon" variant="ghost">
            <IoHeart className="w-6 h-6" />
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
