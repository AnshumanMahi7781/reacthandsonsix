
import { useNavigate, useParams } from 'react-router-dom'
import storeData from './DatabaseStore';
import { useContext } from 'react';

function EditStudent() {

  const contextData = useContext(storeData);


  let NavigateToStudent = useNavigate();
  let param = useParams();

  let filterData = (data) => {
    return  Number(data.stuID) === Number(param.ID)
  }

  let currentData = contextData.studentData.filter(filterData)

  let changeHandler = (e) => {

  }
  let updateHandler = (e) => {
    e.preventDefault()
  }
  return (
    <section className='CommonSection updateStudentSection'>
      <form className='studneDescForm'>

        <div className="FormRow FormRow-1">
          <input type="text" name='stuName' placeholder='Enter Student Name' onChange={changeHandler} value={currentData[0].stuName} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-2">
          <input type="number" name='stuAge' placeholder='Enter Student Age' onChange={changeHandler} value={currentData[0].stuAge} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-3">
          <input type="text" name='stuCourse' placeholder="Enter Student's Course" onChange={changeHandler} value={currentData[0].stuCourse} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-4">
          <input type="text" name='stuBatch' placeholder="Enter Student's Batch" onChange={changeHandler} value={currentData[0].stuBatch} className='stuDescInput' />
        </div>

        <div className="FormRow buttonsContainer">
          <button type="button" onClick={(e) => NavigateToStudent('/student')} className='cancleButton commonButton'>Cancel</button>
          <button className='updateButton commonButton' onClick={updateHandler}>Update</button>
        </div>

      </form>
    </section>
  )
}

export default EditStudent
