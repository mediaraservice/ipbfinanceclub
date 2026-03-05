import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '.';
const AllRoutes = props => {
  return <Routes>
			{(appRoutes || []).map((route, idx) => <Route {...props} key={idx + route.name} path={route.path} element={route.element} />)}
		</Routes>;
};
export default AllRoutes;