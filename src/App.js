import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Movie from './Components/Movie/Movie';
import Series from './Components/Series/Series';
import Booked from './Components/Booked/Booked';
import Error from './Components/Error/Error';
import Layout from './Components/Layout/Layout';


const myRouter = createBrowserRouter([

  {path:"/", element:<Layout />, children:[
    {path:"", element:<Movie />},
    {path:"movie", element:<Movie />},
    {path:"series", element:<Series />},
    {path:"booked", element:<Booked />},
    {path:"*", element:<Error />},
  ] }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
