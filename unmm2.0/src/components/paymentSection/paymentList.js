import React from 'react';

//components
import PaymentItem from './paymentItem';

const PaymentList = ( { Payments } ) => {

    //generate and display items
    const displayPayments = ( ) => {
            let dataPayments = Payments;

            return dataPayments.map((payment, index) => {
                return (
                            <PaymentItem 
                                payment={ payment } 
                                id={ index }
                                key={ 'pmNum_' + index }/>
                        );
            });
     }//displayPayments   

    return(
                <div className='PaymenList'> 
                        { displayPayments() } 
                </div>
          );
}

export default PaymentList;