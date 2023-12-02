import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes/index.tsx';
import Header from './components/Header/index.tsx';
import { Footer } from './components/Footer/index.tsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Header />
		<RouterProvider router={router}></RouterProvider>
		<Footer />
	</Provider>
);
