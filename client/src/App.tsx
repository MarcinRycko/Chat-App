import io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { ChatContextProvider } from './context/ChatContextProvider';
import ChatApp from './components/ChatApp/ChatApp';
import './styles/global.css';

const socket: Socket = io(`http://${window.location.hostname}:5000`);

const App: React.FC = () => {
  return (
    <>
      <ChatContextProvider socket={socket}>
        <ChatApp />
      </ChatContextProvider>
    </>
  );
};

export default App;
