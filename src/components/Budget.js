import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, currency, dispatch } = useContext(AppContext);


    const setBudget = (newBudget) => {
        if(newBudget > 20000){            
            alert("The budget cannot exceed £20,000.");
            setBudget("20000");
            return;
        }
        else if(newBudget < totalExpenses){
            alert("You cannot reduce the budget value lower than spending.");
            setBudget(totalExpenses);
            return;            
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });    
        }
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    step='10'
                    //id='cost'
                    value={budget}
                    style={{ marginLeft: '0.3rem' , size: 10, width: 130, height: 23}}
                    onChange={(event) => setBudget(event.target.value)}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;