import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './actions'

const Counter = ({counter, increment, decrement, random}) => {
    return (
        <div>
            <h1 className="counter">
                {counter}
            </h1>
            <button className="dec"
            onClick={decrement}
            >
                Decrement
            </button>
            <button className="inc"
            onClick={increment}
            >
                Increment
            </button>
            <button className="rand"
            onClick={random}
            >
                Random
            </button>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        counter : state
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     const {increment, decrement, random} =
//         bindActionCreators(actions, dispatch)
//     return {
//         increment,
//         decrement,
//         random: ()=>{
//             const paylod = Math.floor(Math.random() * 10);
//             random(paylod)
//         }
//     }
// }
export default connect(mapStateToProps, actions)(Counter);