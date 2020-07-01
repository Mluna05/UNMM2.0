import React, { useState } from 'react';

//components
import PaymentSection from './paymentSection';
import HeaderSection from './headerSection';

//info dummy
import * as paymentDummy from './paymentSection/infoDummy';
const pD = paymentDummy.default.pD2;


const Container = () => {
    
    const [ Payments, setPayments ] = useState( pD ); 

    const modifyPayment = ( currentPayments ) =>{
        setPayments( currentPayments );
    }

    return(
            <div className="container"> 
                
                    {/* <HeaderSection/> */}

                    <PaymentSection
                                    Payments={ Payments }
                                    modifyPayment={ modifyPayment }
                                    />

            </div>
          );
}

export default Container;