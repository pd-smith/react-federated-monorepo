import React from 'react';
import { DefaultGenerics, RouteLoaders } from "@tanstack/react-location";
import App from "./app/app";

type Modules = 'main'

export const modules: Record<Modules, RouteLoaders<DefaultGenerics>> = {
    main: {
        element: <App />
    }
}
