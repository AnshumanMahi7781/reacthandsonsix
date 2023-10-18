import { useContext } from 'react'
import { Link } from 'react-router-dom'
import storeData from './DatabaseStore';
function Student() {
  const contextData = useContext(storeData);

  // let handleDelete = (itemIndex) => {
  //   delete contextData.studentData[itemIndex];
  //   contextData.studentData = [...contextData.studentData];
  //   contextData.setStudentData(contextData.studentData);
  // }

  // let filteredData = (details) => {
  //   return details
  // }

  return (
    <section className='CommonSection studentSection'>
      <div className="studentSection--Heading">
        <h3>Student Details</h3>
        <Link to="/student-desc" className='addNewStudentBtn'>Add New Student</Link>
      </div>
      <table className='studentDetails--table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {
            contextData.studentData.map((details, index)=>{
              return <tr key={index}>
              <td>{details?.stuName}</td>
              <td>{details?.stuAge}</td>
              <td>{details?.stuCourse}</td>
              <td>{details?.stuBatch}</td>
              <td><Link to={`/student-desc/${index}`} className='editDetailsBtn'>Edit</Link></td>
              {/* <td><i className="fa-solid fa-trash DeleteButton" onClick={() => handleDelete(index)}></i></td> */}
            </tr>
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default Student

