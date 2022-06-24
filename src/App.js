import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen/index.js";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen.js";
import Tuiter from "./components/tuiter";
import todosReducer from './components/labs/redux-examples/reducers/todos-reducer';
import { createStore } from "redux"
import ProfileScreen from './components/tuiter/ProfileScreen';
import EditProfileScreen from './components/tuiter/EditProfile';

const store = createStore(todosReducer)

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index element={<Labs/>}/>
                      <Route path="labs" exact={true} element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path={"tuiter"}
                      element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
                          <Route path="edit-profile"
                                 element={<EditProfileScreen/>}/>

                       

                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}


export default App;


