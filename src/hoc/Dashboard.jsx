import { ToastContainer } from 'react-toastify'
import Sidebar from '../components/dashboardComp/Sidebar'
import { useSelector } from 'react-redux'
const Dashboard = ({ chlidren }) => {
  const { isLoading } = useSelector(state => state.post)
  return (
    <div className='relative text-white flex justify-between w-full'>
      <Sidebar />
      {chlidren}
      {
        isLoading
        && <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" />
        </div>
      }

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Dashboard
