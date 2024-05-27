import "./App.css";
import MainLayout from "./layout/MainLayout";
import Navbar from "./layout/Navbar";
import Routing from "./routes";
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainLayout>
        <Routing />
        <Toaster toastOptions={{
          classNames:{
            success:"bg-green-200",
            error:"bg-red-200",
            warning:"bg-orange-200"
          }
        }}/>
      </MainLayout>
    </div>
  );
}

export default App;
