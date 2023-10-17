import React from 'react'
import { useNavigate } from 'react-router-dom'
import storeData from './DatabaseStore';
import { useContext } from 'react';
function AddNewStudent() {

    let NavigateToStudent = useNavigate();
    const contextData = useContext(storeData);
    let newObj = {
        stuName: "",
        stuAge: "",
        stuCourse: "",
        stuBatch: "",
    }

    const handleChange = (e) => {
        newObj[e.target.name] = e.target.value;
    }
    const submitHandler = (e) => {
        e.preventDefault();
        contextData.studentData.push(newObj);
        NavigateToStudent('/student');
    }

    return (
        <section className='CommonSection addNewStudentSection'>
            <form className='studneDescForm'>

                <div className="FormRow FormRow-1">
                    <input type="text" name='stuName' placeholder='Enter Student Name' className='stuDescInput' onChange={handleChange} />
                </div>

                <div className="FormRow FormRow-2">
                    <input type="number" name='stuAge' placeholder='Enter Student Age' className='stuDescInput' onChange={handleChange} />
                </div>

                <div className="FormRow FormRow-3">
                    <input type="text" name='stuCourse' placeholder="Enter Student's Course" className='stuDescInput' onChange={handleChange} />
                </div>

                <div className="FormRow FormRow-4">
                    <input type="text" name='stuBatch' placeholder="Enter Student's Batch" className='stuDescInput' onChange={handleChange} />
                </div>

                <div className="FormRow buttonsContainer">
                    <button onClick={() => NavigateToStudent('/student')} className='cancleButton commonButton' type='button'>Cancel</button>
                    <button className='submitButton commonButton' onClick={submitHandler} >Submit</button>
                </div>

            </form>

        </section>
    )
}

export default AddNewStudent
