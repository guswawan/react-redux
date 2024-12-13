import { Card } from './components/Card';
import { Header } from './components/Header';
import productData from './assets/mocks/productData.json';

function App() {
  const products = productData?.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        stock={item.stock}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="flex flex-col px-24">
        <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
          <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 sm:text-6xl">
              Become a trend-setter with us.
            </h1>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">
              OnWinkel provides you with the finest jersey and ensures your
              confidence throughout your days.
            </p>
          </div>

          <div className="flex gap-4 mb-4">{products}</div>
        </main>
      </div>
    </>
  );
}

export default App;
