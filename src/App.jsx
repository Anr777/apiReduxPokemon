
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy2 } from './store/slices/counter';

function App() {

  const { counter } = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { dispatch(increment()) }}>
          Increment
        </button>
        <button onClick={() => { dispatch(decrement()) }}>
          Decrement
        </button>
        <button onClick={() => { dispatch(incrementBy2(2)) }}>
          Increment by 2
        </button>
        
        <p>{counter}</p>
        
      </div>
    </>
  )
}
export default App
