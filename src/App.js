import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
function App() {
  return (
    <div className="m-2 text-gray-400">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
