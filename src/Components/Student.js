import { useContext } from 'react'
import { Link } from 'react-router-dom'
import storeData from './DatabaseStore';
function Student() {
  const contextData = useContext(storeData);

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
          </tr>
        </thead>
        <tbody>
          {
              contextData.studentData.map((details) => {
                return <tr key={details.stuID}>
                  <td>{details.stuName}</td>
                  <td>{details.stuAge}</td>
                  <td>{details.stuCourse}</td>
                  <td>{details.stuBatch}</td>
                  <td><Link to={`/student-desc/${details.stuID}`}  className='editDetailsBtn'>Edit</Link></td>
                </tr>
              })
            }
        </tbody>
      </table>
    </section>
  )
}

export default Student

