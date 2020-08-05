import React, { useState } from 'react';

//components
import useWithFetchInitialData from './withFetchInitialData';
import PaymentPresentation from './paymentPresentation';


const Container   = () => {
    
    const [ payments, setPayments ] = useState( '' ); 

    const modifyPayment = ( currentPayments ) =>{
        setPayments( currentPayments );
    }

    return(
            <div className="container"> 

                { useWithFetchInitialData( PaymentPresentation, modifyPayment , payments) }

            </div>
          );
}

export default Container;