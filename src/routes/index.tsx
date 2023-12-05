import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BookDetail from '../pages/BookDetail';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Suspense } from 'react';

const Routes = () => (
	<Suspense>
		<div className='app'>
			<Provider store={store}>
				<Header />
				<Switch>
					<Route exact path='/' component={Catalog} />
					<Route path='/book' component={BookDetail} />
				</Switch>
				<Footer />
			</Provider>
		</div>
	</Suspense>
);

export default Routes;
