import { Route } from "@tanstack/react-location";
import { AppLayout } from "../layouts/AppLayout";

const routes: Route[] = [
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <div>Welcome to the home page</div>
            },
            {
                path: '/clientOne',
                import: () => import('client-one/Module').then((module) => module.modules.main)
            },
            {
                element: <div>not found</div>
            }
        ]
    }
]

export default routes;