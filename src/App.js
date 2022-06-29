import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import HelloWorld from "./components/hello-world";
// import Labs from "./components/labs";
// import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen.js";
// import Tuiter from "./components/tuiter";
import { combineReducers, createStore } from "redux"
// import ProfileScreen from './components/tuiter/ProfileScreen';
// import EditProfileScreen from './components/tuiter/EditProfile';
// import HomeScreen from "./components/tuiter/HomeScreen";
import { Provider } from 'react-redux';
import Todos from './components/labs/redux-examples/Todos';
import todosReducer from './components/labs/redux-examples/reducers/todos-reducer';
import moviesReducer from './components/labs/api-examples/moviesReducer';
import ApiExamples from './components/labs/api-examples';

// merge reducer
const reducer = combineReducers({
  movies: moviesReducer,
  todos: todosReducer
})
const store = createStore(reducer)


function App() {
  return (
      <Provider store ={store}>
        <div>
          <ApiExamples/>
          <Todos/>
        </div>
      </Provider>
      // <BrowserRouter>
      //     <div className="container">
      //         <Routes>
      //             <Route path="/">
      //                 <Route index element={<Labs/>}/>
      //                 <Route path="labs" element={<Labs/>}/>
      //                 <Route path="hello" element={<HelloWorld/>}/>
      //                 <Route path="tuiter" element={<Tuiter/>}>
      //                     <Route path="explore" element={<ExploreScreen/>}/>
      //                     <Route path="profile">
      //                         <Route index element={<ProfileScreen/>} />
      //                         <Route path="edit" element={<EditProfileScreen/>} />
      //                     </Route>
      //                     <Route index element={<HomeScreen/>}/>
      //                 </Route>
      //             </Route>
      //         </Routes>
      //     </div>
      // </BrowserRouter>
      
  );
}

export default App;


