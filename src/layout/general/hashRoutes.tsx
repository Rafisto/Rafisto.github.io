import { createHashRouter } from "react-router-dom";
import Contact from "../../routes/contact/contact";
import Articles from "../../routes/projects/articles/articles";
import Poems from "../../routes/projects/poems/poems";
import Codebase from "../../routes/projects/codebase/codebase";
import Accomplishments from "../../routes/accomplishments/accomplishments";
import Electronics from "../../routes/projects/electronics/electronics";
import Links from "../../routes/links/links";
import Projects from "../../routes/projects/projects";
import App from "../../app";
import Home from "../../routes/home/home";

const UnwrappedRoutes =
    [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/articles',
            element: <Articles />
        },
        {
            path: '/articles/:url',
            element: <Articles />
        },
        {
            path: '/codebase',
            element: <Codebase />
        },
        {
            path: '/codebase/:url',
            element: <Codebase />
        },
        {
            path: '/poems',
            element: <Poems />,
        },
        {
            path: '/poems/:url',
            element: <Poems />
        },
        {
            path: '/accomplishments',
            element: <Accomplishments />
        },
        {
            path: '/electronics',
            element: <Electronics />
        },
        {
            path: '/electronics/:url',
            element: <Electronics />
        },
        {
            path: '/links',
            element: <Links />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]


export const HashRoutes = createHashRouter(
    UnwrappedRoutes.map((route) => (
        {
            path: route.path,
            element: <App>{route.element}</App>
        }
    ))
)