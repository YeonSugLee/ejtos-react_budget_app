import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
   
    const setCurrency = (newCurrency) => dispatch({        
        type: 'CHG_CURRENCY',
        payload: newCurrency,
    })

    return (
                <select className='alert alert-success dropdown-toggle' id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                    <option daultValue value="£" name="£">£ Pound</option>
                    <option value="$" name="$">$ Dollar</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Ruppee</option>
                </select>
    );
};

export default Currency;




