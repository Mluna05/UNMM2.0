import React, { useState } from 'react';

//components
import PaymentSection from './paymentSection';

const PaymentPresentation = ( { payments, modifyPayment } ) => {

    return(
            <div className="container"> 
                
                    {/* <HeaderSection/> */}

                    <PaymentSection payments={ payments }
                                    modifyPayment={ modifyPayment } />
            </div>
          );
}

export default PaymentPresentation;