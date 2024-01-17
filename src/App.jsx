
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducers/counter.js'
export default function App(){
	const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return(
    <>
    Prueba con Redux para que permanezcan los estados al limpiar cache
    <br></br><br></br>
    <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Incrementar en 1
        </button>
        <br></br><br></br>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Disminuir en 1
        </button>
        <br></br><br></br>
        <span>Cantidad : {count}</span>
        <br></br><br></br>

        <input type="textbox"/>
        </>)
}