import { Header } from './components/Header';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col px-24">
        <h1 className="text-indigo-500 font-semibold text-5xl">Hello World!</h1>
        <Button className="w-fit">This btn</Button>
      </div>
    </>
  );
}

export default App;
