import { RouteObject } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BookDetail from '../pages/BookDetail';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Catalog />,
	},
	{ path: '/book/:bookId', element: <BookDetail /> },
];

export default routes;
