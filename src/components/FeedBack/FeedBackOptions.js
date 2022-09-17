// import React from 'react';
// // import PropTypes from 'prop-types';

// // const FeedBackOptions = () => {

// // }
// const FeedBackOptions = ({ options, onLeaveFeedback }) => {
//     const optionsBts = options.map(option => (
//                 <button
//                     type="button"
//                     name={option}
//                     onClick={onLeaveFeedback}>
// 					{option}
// 				</button>
//     ));
    
//     return (
//         <>
// 			{optionsBts}
// 		</>
//     );
// }

// FeedBackOptions.defaultProps = {
//     options: [],
// }

// FeedBackOptions.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string.isRequired),
//     onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedBackOptions;
import { nanoid } from "nanoid";
import React from "react";
import PropTypes from "prop-types"
import css from './FeedBackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div className={css.container}>
            {options.map(option => {
                return <button key={nanoid()} name={option} className={css.feedback_btn} type="button" onClick={onLeaveFeedback}>{option}</button>
            })}
        </div> )         
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions