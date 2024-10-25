import { BrowserRouter,Route,Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import reduxStore from "./utils/reduxStore"
import FeedPage from "./components/FeedPage"
import Connections from "./components/Connections"
import ConnectionRequests from "./components/ConnectionRequests"
import SignUp from "./components/SignUp"
function App() {
  return (
    <>
    <Provider store={reduxStore}>
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Body/>}>
                <Route path="/" element={<FeedPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="/connections" element={<Connections/>}/>
                <Route path="/requests" element={<ConnectionRequests/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Route>
        </Routes>
      </BrowserRouter> 
    </Provider>
    </>
  )
}

export default App 
