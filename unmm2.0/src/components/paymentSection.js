import React from 'react';

//components
import EditForm from './paymentSection/editForm';
import PaymentList from './paymentSection/paymentList';


const PaymentSection = ( { Payments, modifyPayment } ) => {

    
 	const onChange = ( e ) => {
        modifyPayment( createNewArrayPayments(e) );
    }

    // Last update WIP 
    // **get or not an id to modify
   const createNewArrayPayments  = ( { name, value, id } ) => {

        if( !Payments ){
            Payments = [{ title:'', icon:'', desc:'', date:'', amount:0}];
        }

        const newArrayPayments = [...Payments, { [name] : value } ] ;

        return newArrayPayments;
             
    }
    
    return(
            <div className='PaymentSection'> 

                <EditForm payment={ Payments }
                          onChange={ onChange }
                          />

                {/* { Payments.length ? <PaymentList Payments={ Payments } /> : null } */}
                
            </div>
          );
}

export default PaymentSection;