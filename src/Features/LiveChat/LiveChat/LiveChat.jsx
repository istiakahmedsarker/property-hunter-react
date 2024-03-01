import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const LiveChat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
export default LiveChat