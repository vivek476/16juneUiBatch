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
import Welcome from './Welcome';
import Useraccount from './Useraccount';
import Jobmatches from './Jobmatches';
import Myappliedjob from './Myappliedjob';
import Changemypassword from './Changemypassword';
import Userlogout from './Userlogout';
import Mymessage from './Mymessage';
import Myinbox from './Myinbox';
import Employeereport from './Employeereport';
import Companyreport from './Companyreport';
import Feedbackreport from './Feedbackreport';
import Adminlogout from './Adminlogout';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <div className=" mt-3 d-flex" style={{backgroundColor: '#F5F5F7', minHeight: '31vh'}}>
        {/* Sidebar */}
        <div className="sidebar p-3 border-end" style={{ width: "200px"}}>
          <h5 className='text-center'>Company Menu</h5>
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
          <br />
          <br />
          <h5 className='text-center'>Employee Menu</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/welcome">Welcome</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/useraccount">User Account</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2', textDecoration: 'none' }} to="/jobmatches">Job Matches</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/myappliedjob">My Applied job</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/mymessage">My Message</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/myinbox">My Inbox</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/changemypassword">Change My Password</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/userlogout">User Log Out</Link>{' '}
            </li> 
          </ul>  
          <br />
          <br />
          <h5 className='text-center'>Admin Menu</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/employeereport">Employee Report</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/companyreport">Company Report</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#0A66C2 ', textDecoration: 'none' }} to="/feedbackreport">Feedback Report</Link>{' '}
              <Link className="text-white d-block text-center px-4 py-2 w-100" style={{ backgroundColor: '#264FAD ', textDecoration: 'none' }} to="/adminlogout">Admin Logout</Link>{' '}
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
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/useraccount" element={<Useraccount />} />
            <Route path="/jobmatches" element={<Jobmatches />} />
            <Route path="/myappliedjob" element={<Myappliedjob />} />
            <Route path="/mymessage" element={<Mymessage />} />
            <Route path="/myinbox" element={<Myinbox />} />
            <Route path="/changemypassword" element={<Changemypassword />} />
            <Route path="/userlogout" element={<Userlogout />} />
            <Route path="/employeereport" element={<Employeereport />} />
            <Route path="/companyreport" element={<Companyreport />} />
            <Route path="/feedbackreport" element={<Feedbackreport />} />
            <Route path="/adminlogout" element={<Adminlogout />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
