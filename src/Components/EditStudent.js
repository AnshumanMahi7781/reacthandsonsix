
import { useNavigate, useParams } from 'react-router-dom'
import storeData from './DatabaseStore';
import { useContext } from 'react';

function EditStudent() {

  let NavigateToStudent = useNavigate();
  let param = useParams();
  const contextData = useContext(storeData);



  let updatedObj = {
    stuName: contextData.studentData[param.ID].stuName,
    stuAge: contextData.studentData[param.ID].stuAge,
    stuCourse: contextData.studentData[param.ID].stuCourse,
    stuBatch: contextData.studentData[param.ID].stuBatch,
  }
  let changeHandler = (e) => {
    updatedObj[e.target.name] = e.target.value;
  }

  let updateHandler = (e) => {
    e.preventDefault()
   contextData.studentData[param.ID] = updatedObj;
   NavigateToStudent('/student');
  }
  return (
    <section className='CommonSection updateStudentSection'>
      <form className='studneDescForm'>

        <div className="FormRow FormRow-1">
          <input type="text" name='stuName'  placeholder={contextData.studentData[param.ID].stuName} onChange={changeHandler} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-2">
          <input type="number" name='stuAge'  placeholder={contextData.studentData[param.ID].stuAge} onChange={changeHandler} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-3">
          <input type="text" name='stuCourse'  placeholder={contextData.studentData[param.ID].stuCourse} onChange={changeHandler} className='stuDescInput' />
        </div>

        <div className="FormRow FormRow-4">
          <input type="text" name='stuBatch'  placeholder={contextData.studentData[param.ID].stuBatch} onChange={changeHandler} className='stuDescInput' />
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
