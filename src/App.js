import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HelloWorld from './hello';
// import Practice from "./components/Practice";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen.js";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen.js";
import Tuiter from "./components/tuiter";
// import Todo from "./components/lecture/w6/Todo";
import Todos from './components/labs/redux-examples/Todos.js';




function App() {
  return (
    <div>
      <Todos/>
    </div>
    

    // <BrowserRouter>
    //   <div className="container">
    //     <Routes>

    //       <Route path="/tuiter/home" element={<HomeScreen />} />
    //       <Route path="/tuiter/explore" element={<ExploreScreen />} />

    //       <Route path="/hello"
    //         exact={true}
    //         element={<HelloWorld />} />
    //       <Route path="/"
    //         exact={true}
    //         element={<Labs />} />
    //       <Route path="/tuiter"
    //         exact={true}
    //         element={<Tuiter />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>


    // <BrowserRouter>
    //   <div className='container'>
    //     <Route path='/hello' exact={true}>
    //       <HelloWorld/>
    //     </Route>
    //     <Route path={['/','/practice']} exact={true}>
    //       <Practice/> 
    //     </Route>
    //     <Route path='/twitter/home' component={HomeScreen}/>
    //     <Route path='/twitter/explore' component={ExploreScreen}/>
    //     <Route path='lectures/w6/todo'>
    //       <Todo/>
    //     </Route>
    //   </div>
    // </BrowserRouter>
    
  
  )
}

export default App;


