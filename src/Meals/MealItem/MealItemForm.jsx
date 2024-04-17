// import classes from './MealItemForm.module.css'
// import { useRef, useState } from 'react'
// import Input from '../../UI/Input';

// const MealItemForm = ({ id, addToCartHandler }) => {

//   const [amountIsValid, setAmountIsValid] = useState(true);
//   const amountInputRef = useRef(0);
//   console.log('Form', amountInputRef);

//   const submitHandler = event => {
//     event.preventDefault();

//     console.log('form', amountInputRef)
//     const enteredAmount = amountInputRef.current.value;
//     //always a string
//     const enteredAmountNum = +enteredAmount
//     //easy way to convert string num into num num
//     if (enteredAmount.trim().length === 0 ||
//       enteredAmountNum < 1 || enteredAmountNum > 5) {
//       setAmountIsValid(false)
//       return;
//     }
//     addToCartHandler(enteredAmountNum)
//   }
//   return (
//     <form action="">
//       <Input
//         label="Amount"
//         input={
//           {
//             id: 'amount_' + id,
//             type: 'number',
//             min: '1',
//             max: '5',
//             step: '1',
//             defaultValue: '1'
//           }
//         }
//         ref={amountInputRef}
//       ></Input>
//       <button onClick={submitHandler}>+Add</button>
//       {!amountIsValid && <p>Please enter a valid amount!</p>}
//     </form>
//   )
// }
// export default MealItemForm

import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();


    console.log('form',amountInputRef);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.addToCartHandler(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
