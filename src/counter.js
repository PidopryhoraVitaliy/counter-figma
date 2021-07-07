import React from 'react';

const Counter = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="counter-wrap">
                    <h1>0</h1>
                </div>
                <div className="btn-block">
                    <button className="btn btn-outline-primary"><img src="./img/Plus Btn.svg" alt="+1"></img></button>
                    <button className="btn btn-outline-primary"><img src="./img/Minus Btn.svg" alt="-1"></img></button>
                    <button className="btn btn-outline-primary"><img src="./img/Reset Btn.svg" alt=""></img></button>
                </div>
            </div>
        </div>
    );
}

export default Counter;