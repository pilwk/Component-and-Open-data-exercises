import { createBrowserRouter } from 'react-router-dom';
import Ass1 from './componentAssignment/src/App.jsx';
import Ass2 from './openDataAssignment/src/App.jsx';
import Navigation from './Navigation.jsx';

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigation />,
        children: [
            {
                path: '/componentAssignment/*',
                element: <Ass1 />,
            },
            {
                path: '/openDataAssignment/*',
                element: <Ass2 />,
            }
        ]
    },
]);

export default myRouter;