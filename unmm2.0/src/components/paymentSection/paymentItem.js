import React from 'react';

//icons update-delete
import { FaWindowClose, FaEdit} from "react-icons/fa";

const PaymentItem = ( { payment , id, editModeHandlerItem, deleteItemfromList } ) => {

  const { title, desc, date, amount } = payment;

  const editItem = () => {
    editModeHandlerItem( id );
  }

  const deleteItem = () => {
    deleteItemfromList( id );
  }

    return(
            <div className='PaymentItem'>  

                <div className="InfoContainer">

                    <div className="InfoTitle">  { title }  </div>
                    
                    <div className="InfoControl"> 
                        <span className="InfoBtnEdit" onClick={ editItem } > { <FaEdit /> } </span>
                        <span className="InfoBtnCerrar" onClick={ deleteItem } > { <FaWindowClose /> } </span>
                    </div>

                    <div className="InfoDate">  { date }  </div>

                    <div className="InfoDesc">  { desc }   </div>
                    <div className="InfoMonto"> $ { amount }  </div>

                </div>

            </div>
          );
}

export default PaymentItem;