import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AddPost from './components/AddPost/AddPost'
import AddUser from './components/AddUser/AddUser'
import './app.sass'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/add-user" component={AddUser} exact />
        <Route path="/add-post" component={AddPost} exact />
      </Router>
    </div>
  )
}

export default App
