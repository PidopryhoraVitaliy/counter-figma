import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from "redux";
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="container">
            <div className="content">
                <div className="counter-wrap">
                    <h1 className="counter">{counter}</h1>
                </div>
                <div className="btn-block">
                    <button onClick={inc} className="btn btn-outline-primary"><img src="./img/Plus Btn.svg" alt="+1"></img></button>
                    <button onClick={dec} className="btn btn-outline-primary"><img src="./img/Minus Btn.svg" alt="-1"></img></button>
                    <button onClick={res} className="btn btn-outline-primary"><img src="./img/Reset Btn.svg" alt=""></img></button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/

export default connect(mapStateToProps, actions)(Counter);