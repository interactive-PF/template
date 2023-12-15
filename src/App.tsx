import '@/App.css';
import router from '@/routes/routes';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
