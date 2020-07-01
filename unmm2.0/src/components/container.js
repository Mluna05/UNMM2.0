import React from 'react';

//components
import PaymentSection from './paymentSection';
import HeaderSection from './headerSection';

const Container = () => {
    
    return(
            <div className="container"> 
                
                {/* <HeaderSection/> */}

                <PaymentSection/>

            </div>
          );
}

export default Container;