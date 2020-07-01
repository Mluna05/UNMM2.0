import React from 'react';

const EditForm = ( { payment, onChange } ) => {

    const { title, desc, date, amount } = payment;
    
    return(
            <div className='EditForm'> 
              
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
                              onChange={ (e) => onChange(e.target)  }
                            />
                      </div>{/* editForm-title */}

                        <div className="editForm-desc">
                              <p>Description:</p>
                              <textarea value={ desc }
                                name='desc'
                                placeholder='Enter a description...'
                                className='textAreaDesc' 
                                maxLength = '255'
                                onChange={ (e) => onChange(e.target)  }
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
                                onChange={ (e) => onChange(e.target)  }
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
                                onChange={ (e) => onChange(e.target)  }
                              />
                        </div>{/* editForm-amoun */}

                        <div className='editForm-dateErrorMsg' > Error Amaount </div>
                        {/* editForm-dateErrorMsg */}
                </form>
              </div> 
            </div>
          );
}

export default EditForm;