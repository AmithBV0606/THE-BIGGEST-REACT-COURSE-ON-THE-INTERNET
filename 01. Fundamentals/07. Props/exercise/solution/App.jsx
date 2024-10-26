import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name="Amith" age={24} />
      <Product name="Iphone" price={30000} />
    </div>
  );
}

export default App;