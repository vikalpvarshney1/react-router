
import './App.css';
import {Navbar} from './Components/Navbar'
import {Routes , Route} from 'react-router-dom'
import {About} from './Components/About'
import {Contact} from './Components/Contact'
import {Home} from './Components/Home'
import {Login} from './Components/Login'
import {Users} from './Components/Users'
import { UserDetails } from './Components/UserDetails';

function App() {
  return (
    <div className="App">
     <h1>router</h1>
     <Navbar />
    <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/users" element={<Users />} />
 <Route path="/login" element={<Login />} />
  <Route path='/users/:id' element={<UserDetails />}/>
    </Routes>
    </div>
  );
}

export default App;
