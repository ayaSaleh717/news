import {createBrowserRouter ,Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'

import './App.css';
import Home from  './component/Home'
// import Aside from './component/Aside';
// import Hero from './component/Hero';
// import Footer from './component/Footer';
import About from './component/About';
import RouteLayOut from './component/Layout/RouteLayOut';
import Help from './component/Layout/HelpLayout';
import Faq from './component/Faq';
import Contact from './component/Contact';
import NotFound from './component/NotFound';
import CareersLayout from './component/Layout/CareersLayout';
import Career, { careersLoader } from './component/Career'
import CareerDetails, { CareerDetailsLoader } from './component/CareerDetails';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayOut />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        
        <Route path='help' element={<Help />} >
          <Route path='faq' element={<Faq />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path="careers" element={<CareersLayout />} >
        <Route 
          index 
          element={<Career />} 
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        
        <Route path=':id'
         element={<CareerDetails/>}
         loader={CareerDetailsLoader}
        />

        




 
      </Route>
        <Route path='*' element={<NotFound />} />
    </Route>
  )
)



function App() {
  return (
    
   
    <RouterProvider router={router} >
     
    </RouterProvider>
    
  );
}

export default App;
