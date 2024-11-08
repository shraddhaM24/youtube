import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from "react-redux";
import store from './utilis/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import VideoResults from './components/VideoResults';
import NotFound from './components/NotFound'; // Assuming you create a NotFound component

// Define your appRouter structure
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* Move Header here to be within Router context */}
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch", // Define path for WatchPage
        element: <WatchPage />
      },
      {
        path: "search/:query", // Dynamic route for search query
        element: <VideoResults /> // Component to show video results
      },
      {
        path: "*", // Catch-all route for 404 page
        element: <NotFound /> // 404 page
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
