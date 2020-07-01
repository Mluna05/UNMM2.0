import React from 'react';

//components
import EditForm from './paymentSection/editForm';
import PaymentList from './paymentSection/paymentList';


const PaymentSection = () => {
    
    return(
            <div className='PaymentSection'> 
                <EditForm />
                {/* <PaymentList/> */}
            </div>
          );
}

export default PaymentSection;