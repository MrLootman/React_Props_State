import './App.css'
import Avatar from './components/Avatar'
import { bart, homer } from '../data.js';

function App() {
  return (
    <main>
      <Avatar 
        simpsonImage={bart.image}
        simpsonFirstName={bart.firstName}
        simpsonLastName={bart.lastName}
      />
      <Avatar 
        simpsonImage={homer.image}
        simpsonFirstName={homer.firstName}
        simpsonLastName={homer.lastName}
      />
    </main>
  )
}

export default App
