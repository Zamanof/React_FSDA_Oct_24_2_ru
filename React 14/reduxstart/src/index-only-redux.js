import {createStore, bindActionCreators} from "redux";
import * as actions from "./actions";
import {reducer} from "./reducer";
// Action creator

const store = createStore(reducer)
const {dispatch} = store
// const bindActionCreator = (creator, dispatch) =>(...args)=>{
//     dispatch(creator(...args))
// }
// const incDispatch = bindActionCreators(increment, dispatch)
// const decDispatch = bindActionCreators(decrement, dispatch)
// const rndDispatch = bindActionCreators(random, dispatch)

const {increment, decrement, random}
    = bindActionCreators(actions, dispatch)


document.getElementById('inc')
    .addEventListener('click',increment)

document.getElementById('dec')
    .addEventListener('click',decrement)

document.getElementById('rand')
    .addEventListener('click',()=>{
        const payload = Math.floor(Math.random() * 10)
        random(payload)
    })

const updateCounter = () => {
  document
      .getElementById('counter')
      .innerHTML = store.getState().toString()
}
store.subscribe(updateCounter)

// let state = reducer(undefined, {type: 'increment'})
// console.log(state)
// state = reducer(state, {type: 'increment'})
// console.log(state)
// state = reducer(state, {type: 'in'})
// console.log(state)

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// console.log(store.getState())
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// console.log(store.getState())