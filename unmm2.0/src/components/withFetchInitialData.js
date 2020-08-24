import React, { useState, useEffect } from 'react';

//info dummy
import * as paymentDummy from './paymentSection/infoDummy';
const pD = paymentDummy.default.pD2;


const useWithFetchInitialData   = ( Wrapped, setInitialInfo, intialPayments ) => {

    const [ loading, setLoading ] = useState( true ); 
    const [ error, setError ] = useState( false ); 

    const Loading = () => <div> Loading x </div>;
    const Error = () => <div> ERROR </div>;

    

    useEffect(() => {

        const flipCoin = (Math.floor(Math.random() * 2) == 0);
        const timeout = setTimeout(()=>{
            if(flipCoin){
                setInitialInfo(pD);
            }else{
                setError(true);
            }
            setLoading(false);
        },2000);

        return ()=> clearTimeout(timeout) ;
    },[]);

    const showNewElement = () => {
        
        return error? <Error /> : < Wrapped payments={intialPayments} modifyPayment={setInitialInfo} /> ;

    }

    return(
            <div className="container"> 

                { loading ? <Loading /> : showNewElement() } 
          
            </div>
          );
}

export default useWithFetchInitialData;