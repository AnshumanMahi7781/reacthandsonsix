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

  const [studentData, setStudentData] = useState([{
    stuName: "Mahi",
    stuAge: 21,
    stuCourse: 'Frontend',
    stuBatch: "March",
  },
  {
    stuName: "Anuj",
    stuAge: 23,
    stuCourse: 'AI/ML',
    stuBatch: "August",
  },
  {
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

        <Route path='/student-desc' element={<storeData.Provider value={{ studentData, setStudentData }}>
          <AddNewStudent />
        </storeData.Provider>} />

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
