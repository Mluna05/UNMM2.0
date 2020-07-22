import React, { useState }  from 'react';

const EditForm = ( { payment = { title:'', icon:'', desc:'', date:'', amount:0} , onChangeX, handleClose } ) => {

    const [ currentPayment, setCurrentPayment ] = useState( payment ); 

    const { title, desc, date, amount } = currentPayment;

    const updateFieldsHandler = (e) => {
      setCurrentPayment( { ...currentPayment, [e.target.name] : e.target.value } );
    }
    
    return(
            <div className='modal' >
              <section className="modal-main">
              
                  <h3> Edit Payment </h3> 

                  <div className="EditForm">

                    <form>
                          <div className="editForm-title">
                                <p>Title: </p>
                                <input
                                  type='text'
                                  name='title'
                                  placeholder='Title'
                                  value={ title }
                                  onChange={ updateFieldsHandler }
                                />
                          </div>{/* editForm-title */}

                            <div className="editForm-desc">
                                  <p>Description:</p>
                                  <textarea value={ desc }
                                    name='desc'
                                    placeholder='Enter a description...'
                                    className='textAreaDesc' 
                                    maxLength = '255'
                                    onChange={ updateFieldsHandler }
                                  />
                            </div>{/* editForm-desc */}

                            <div className="editForm-date">
                                  <p>Payment Date:</p>
                                  <input 
                                    type='date'
                                    id='date' 
                                    name='date'
                                    value={ date }
                                    required
                                    onChange={ updateFieldsHandler }
                                  />
                            </div>{/* editForm-date */}

                            <div className='editForm-dateErrorMsg' > Error Date </div>
                            {/* editForm-dateErrorMsg' */}

                            <div className="editForm-amount"> 
                                  <p>Amount:</p>
                                  <span> $ </span>
                                  <input
                                    type='number'
                                    id='amount' 
                                    name='amount'
                                    value={ amount }
                                    min='0'
                                    step='.01'
                                    required
                                    onChange={ updateFieldsHandler }
                                  />
                            </div>{/* editForm-amoun */}

                            <div className='editForm-dateErrorMsg' > Error Amaount </div>
                            {/* editForm-dateErrorMsg */}

                            <button type="button" onClick={ handleClose }>Close</button>

                            <button type="button" onClick={ ( ) => { onChangeX( currentPayment ) } }>Add</button>
                    </form>
                  </div>
              
              </section> 
            </div>
          );
}

export default EditForm;