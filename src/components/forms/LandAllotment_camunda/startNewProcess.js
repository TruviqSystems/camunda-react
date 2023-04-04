import React,{useState} from 'react'
import { Field, reduxForm } from 'redux-form'
import './index.css'

const SimpleForm = props => {
  const formtodisplay=['FirmDetails','PromoterDetails','ProjectDetails']

  const [formType, setFormType] = useState(0);

  const [inputFields, setInputFields] = useState([
    { name: '', mobilenumber: '' }
  ])

  const addFields = () => {
    
    let newfield = { name: '',mobilenumber:'' }

    setInputFields([...inputFields, newfield])

}
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)

}


  const PrevStep=(e)=>{
    setFormType(formType-1)
  }

  const NextStep=(e)=>{
      setFormType(formType+1)
  }

  const { handleSubmit, pristine, reset, submitting } = props 
  const renderForm=()=>{
          switch(formtodisplay[formType]) {
            case "FirmDetails":
              return(
                <form onSubmit={handleSubmit} className="container">
                      <h1 className='fsc-5 mb-4'>Firm Details</h1>
                      <div className='mb-2'>
                        
                        <div>
                          <Field
                            name="FirmName"
                            component="input"
                            type="text"
                            placeholder="Firm Name*"
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                      </div> <br/>
                      <div className='mb-2'>
                       
                        <div>
                          <Field
                            name="ContactPerson"
                            component="input" 
                            type="text" 
                            placeholder="Contact Name*"
                            className='border rounded form-control form-floating'
                            required
                          
                          /> 
                        </div>

                      </div>
                      <br/>
                      <div className='mb-2'>
                       
                       <div>
                         <Field
                           name="mailID"
                           component="input" 
                           type="email" 
                           placeholder="Email*"
                           className='border rounded form-control form-floating'
                           required
                         
                         /> 
                       </div>
                       
                     </div>  <br/> 
                      <div className='mb-2'>
                      <button className='btn btn-primary mb-2'  type="submit" onClick={NextStep} disabled={pristine || submitting}>
                          Next 
                        </button>
                      </div>
                    </form>
              )
            case "PromoterDetails":
              return(
                   <form onSubmit={handleSubmit} className=" container">
                      <h1 className='fsc-5 mb-4'>Promoter Details</h1>
                      
                      <div className='mb-2'>
                        <div>
                            {inputFields.map((index,input) => {
                              return (
                                <div className='d-flex flex-row' key={index}>
                                  <div className='mb-2'>
                                    <div>
                                      <input
                                        name="nameOfPromoter"
                                        component="input"
                                        type="text"   
                                        placeholder="Name of Promoter*"
                                        className='border rounded form-control form-floating'
                                        required
                                        value={input.name} 

                                      />
                                    </div>
                                  </div>
                                  <div className='mb-2'>
                                    <div>
                                      <input
                                        name="mobilenumber"
                                        component="input"
                                        type="number"
                                        placeholder="Mobile Number*"
                                        className='border rounded form-control form-floating'
                                        required
                                        value={input.mobilenumber}
                                      />
                                    </div>
                                  </div>  
                                  <button type='text' className="fsc fs-5 text-danger  btn btn-transperent border btn-sm btn1"  onClick={removeFields}>X</button>
                                </div>
                              )
                            })}
                        </div>
                        <p className='fs-3 text-primary'><span>
                        <button type="button" className="btn btn-transperent border" onClick={addFields}>+</button></span></p>
                      </div>  <br/>
                        <br/>  <br/>
                      <div>
                      <div>
                      <span><button className='btn btn-primary mb-2'  type="button" onClick={PrevStep} disabled={pristine || submitting}>
                          Back 
                        </button>
                        &nbsp;&nbsp;
                        <button className='btn btn-primary mb-2'  type="button" onClick={NextStep} disabled={pristine || submitting}>
                          Next 
                        </button></span>
                      </div>
                      </div>
                    </form>
                  )
                  case "ProjectDetails":
                    return(
                      <form onSubmit={handleSubmit} className=" container">
                        <h1 className='fsc-5 mb-4'>Project Details</h1>
                    
                    <div className='mb-2'>
                     
                      <div>
                      <Field name="ProjetCategory" 
                      component="select"
                      defaultValue=""  
                      required
                      className='border rounded form-control'>  <br/>
                      <option value="" disabled>Select project category</option>
                      <option value="Chemical Industry">Chemical Industry</option>
                      <option value="Agricultural Project">Agricultural Project</option>
                      <option value="Informational Technology">Informational Technology</option>
                      required
                      </Field>
                      </div>
                    </div>  <br/>
                    <div className='mb-2'>
                        
                        <div>
                          <Field
                            name="employment"
                            component="input"
                            type="number"
                            placeholder="Estimated Number of Employment "
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                    </div>  <br/>
                    <div className='mb-2'>
                        
                        <div>
                          <Field
                            name="areaOfTheLand"
                            component="input"
                            type="number"
                            placeholder="Land in yards"
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                    </div>  <br/>
                    <div className='mb-2'>
                        
                        <div>
                          <Field
                            name="landlocation"
                            component="input"
                            type="text"
                            placeholder="Land Location"
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                    </div>  <br/>
                    <div>
                    <span><button className='btn btn-primary mb-2'  type="button" onClick={PrevStep} disabled={pristine || submitting}>
                          Back
                    </button>
                    &nbsp;&nbsp;
                      <button className='btn btn-primary mb-2'  type="submit" disabled={pristine || submitting}>
                        Submit
                      </button>
                      </span>
                    </div>
                  </form>
                    )
            default :
            return(
              <form onSubmit={handleSubmit} className=" container">
                     <h1 className='fsc-5 mb-4'>Firm Details</h1>
                      <div className='mb-2'>
                        <label><h4>Firm Name</h4></label>
                        <div>
                          <Field
                            name="FirmName"
                            component="input"
                            type="text"
                            placeholder="Firm Name"
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label><h4>Contact</h4></label>
                        <div>
                          <Field
                            name="ContactPerson"
                            component="input"
                            type="text"
                            placeholder="Contact Name"
                            className='border rounded form-control form-floating'
                            required
                          />
                        </div>
                      </div>
                      <br/>
                      <div className='mb-2'>
                       
                       <div>
                         <Field
                           name="mailID"
                           component="input" 
                           type="email" 
                           placeholder="Email"
                           className='border rounded form-control form-floating'
                           required
                           readonly
                         
                         /> 
                       </div>
                       
                     </div>
                      <div className='mb-2'>
                      <p className='text-warning fsc-3'>Please Fill all the forms displayed in options above!</p>
                      <button className='btn btn-primary mb-2'  type="submit" onClick={NextStep} disabled={pristine || submitting}>
                          Next
                        </button>
                      </div>
                    </form>
            )
        }
    }
  return (
   <div className='container d-flex flex-column justify-content-center align-items-center'>
    <div className='container-fluid bg-light border rounded p-3 shadow-lg bg' >
    {renderForm()}
    </div>
   </div>

  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
