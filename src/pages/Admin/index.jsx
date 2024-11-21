import Sidebar from '../../components/Sidebar';
import MainContent from '../../components/MainContent';
import './Admin.css'

function Admin() {
    return (
      <div className='app-container'>
        <Sidebar />
        <MainContent />
      </div>
    );
  }
  
export default Admin;