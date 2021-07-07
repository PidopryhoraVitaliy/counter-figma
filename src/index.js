import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

console.log(new Date());

//const bindActionCreator = (creator, dispatch) => (...args) => dispatch(creator(...args));

const {inc, dec, res} = bindActionCreators(actions, dispatch);

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('res').addEventListener('click', res);