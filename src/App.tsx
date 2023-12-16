import '@/App.css';
import router from '@/routes/routes';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}
