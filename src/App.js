import Navbar from './Components/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import PageNotFound from './Components/PageNotFound';
import AddNewStudent from './Components/AddNewStudent';
import EditStudent from './Components/EditStudent';
import storeData from './Components/DatabaseStore';
import { useState } from 'react';
function App() {
  let count = 0;
  const [studentData, setStudentData] = useState([{
    stuID: count++,
    stuName: "Mahi",
    stuAge: 21,
    stuCourse: 'Frontend',
    stuBatch: "March",
  },
  {
    stuID: count++,
    stuName: "Anuj",
    stuAge: 23,
    stuCourse: 'AI/ML',
    stuBatch: "August",
  },
  {
    stuID: count++,
    stuName: "Saptarsi",
    stuAge: 22,
    stuCourse: 'MERN',
    stuBatch: "June",
  },
  ]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/student' element={<storeData.Provider value={{ studentData, setStudentData }}>
          <Student />
        </storeData.Provider>} />

        <Route path='/student-desc' element={<AddNewStudent />} />

        <Route path='/student-desc/:ID' element={<storeData.Provider value={{ studentData, setStudentData }}>
          <EditStudent />
        </storeData.Provider>} />

        <Route path='*' element={<PageNotFound />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
