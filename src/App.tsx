import { Outlet } from 'react-router-dom'

function App() {

  return <div className='py-6 container mx-auto pb-14 px-3'>
    <Outlet />
  </div>
}

export default App
