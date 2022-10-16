import Counter from './basics/Counter';
import CounterBy from './basics/CounterBy';
import CounterEffect from './basics/CounterEffect';
import CounterHook from './basics/CounterHook';
import CounterReducerComponent from './counter-reducer/CounterReducerComponent';

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter />
      <br />
      <CounterBy />
      <br />
      <CounterEffect />
      <br />
      <CounterHook />
      <br />
      <CounterReducerComponent />
    </>
  );
}

export default App;
