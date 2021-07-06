import { createStore } from "redux";
import reducer from "./reducer";
import {inc, dec, res} from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (creator, dispatch) => {
  return () => {
    return () => dispatch(creator())
  }
};

const incDispatch = () => dispatch(inc());
const decDispatch = () => bindActionCreator(dec, dispatch);

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('res').addEventListener('click', () => {
  dispatch(res());
})