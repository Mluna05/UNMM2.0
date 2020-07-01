import React from 'react';

//icons update-delete
import { FaWindowClose, FaEdit} from "react-icons/fa";

const PaymentItem = ( { payment , id } ) => {

  const { title, desc, date, amount } = payment;
    
    return(
            <div className='PaymentItem'>  

                <div className="InfoContainer">

                    <div className="InfoTitle">  { title }  </div>
                    
                    <div className="InfoControl"> 
                        <span className="InfoBtnEdit"  > { <FaEdit /> } </span>
                        <span className="InfoBtnCerrar" > { <FaWindowClose /> } </span>
                    </div>

                    <div className="InfoDate">  { date }  </div>

                    <div className="InfoDesc">  { desc }   </div>
                    <div className="InfoMonto"> $ { amount }  </div>

                </div>

            </div>
          );
}

export default PaymentItem;