import React, { useState } from 'react';

//components
import PaymentPresentation from './paymentPresentation';
//info dummy
import * as paymentDummy from './paymentSection/infoDummy';
const pD = paymentDummy.default.pD2;


const WithFetchInitialData   = () => {
    
    const [ payments, setPayments ] = useState( pD ); 

    const loading = () => <div> Loading... </div>;
    const error = () => <div> ERROR </div>;
    const paymentPresentation = () => <PaymentPresentation payments={ payments }
                                                           modifyPayment={ modifyPayment }/>;



    const modifyPayment = ( currentPayments ) =>{
        setPayments( currentPayments );
    }


    return(
            <div className="container"> 

                { paymentPresentation() }
          
            </div>
          );
}

export default WithFetchInitialData;