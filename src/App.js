import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Dashboard from './Dashboard';
import Postnewjob from './Postnewjob';
import Myaccount from './Myaccount';
import Profilematch from './Profilematch';
import Appliedjob from './Appliedjob';
import Changepassword from './Changepassword';
import Logout from './Logout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className=" mt-3 d-flex" style={{backgroundColor: '#F5F5F7', minHeight: '31vh'}}>
        {/* Sidebar */}
        <div className="sidebar p-3 border-end" style={{ width: "200px"}}>
          <h5 className='text-center'>Menu</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/postnewjob">Post new Job</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/myaccount">My Account</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2', textDecoration: 'none' }} to="/profilematch">Profile Match</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/appliedjob">Applied Job</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2', textDecoration: 'none' }} to="/changepassword">Change Password</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/logout">Log Out</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/postnewjob" element={<Postnewjob />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/profilematch" element={<Profilematch />} />
            <Route path="/appliedjob" element={<Appliedjob />} />
            <Route path="/changepassword" element={<Changepassword />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
