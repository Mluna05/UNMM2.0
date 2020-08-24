import React, { useState, Suspense  } from 'react';

//components
import EditForm from './paymentSection/editForm';
import PaymentItem from './paymentSection/paymentItem';

const PaymentList = React.lazy(() => import('./paymentSection/paymentList'));


const PaymentSection = ( { payments, modifyPayment } ) => {

    
    const [ editMode, setEditMode ] = useState( { edit: false, id:'' } ); 

    // last update WIP 
    // when enter an object with an empty id
   const createNewArrayPayments  = ( updatedPayment ) => { 
        const newArrayPayments = [ ...payments ] ;
        newArrayPayments[ editMode.id ] = updatedPayment;
        console.log(newArrayPayments);
        return newArrayPayments;
    }

 	const onChange = ( updatedPayment ) => {
       modifyPayment( ( !editMode.id || editMode.id===0 ) ? createNewArrayPayments( updatedPayment ) :  [ ...payments, updatedPayment ] );
    }

    const editSwitch = ( currectID ) =>{
        setEditMode(  { edit: !editMode.edit, id: currectID }  );
    }
    
    const editModeHandler = ( ) =>{
        editSwitch( '' );
    }

    const editModeHandlerItem = ( idItem ) =>{
        editSwitch( idItem );
    }

    const deleteItemfromList = ( id ) =>{
		let paymentsUpdated = [...payments] ;
		paymentsUpdated.splice(id, 1);
		modifyPayment( paymentsUpdated );
    }

     //generate and display items
    const displayPayments = ( ) => {
            let dataPayments = payments;

            return dataPayments.map((payment, index) => {
                return (
                            <PaymentItem 
                                payment={ payment } 
                                id={ index }
                                key={ 'pmNum_' + index }
                                editModeHandlerItem={ editModeHandlerItem }
                                deleteItemfromList={ deleteItemfromList }/>
                        );
            });
     }//displayPayments   
        
    
    return(
            <div className='PaymentSection'> 

                <div className="btnAdd" onClick={ editModeHandler }> Add New Payment </div>

                { editMode.edit &&  <EditForm   payment={ payments [ editMode.id ] }
                                                onChangeX={ onChange }
                                                handleClose={ editModeHandler }
                                                id={editMode.id}
                                                /> }
                <Suspense fallback={<div>Loading...</div>}>
                    <PaymentList>
                        { displayPayments() }
                    </PaymentList> 
                </Suspense>

            </div>
          );
}

export default PaymentSection;