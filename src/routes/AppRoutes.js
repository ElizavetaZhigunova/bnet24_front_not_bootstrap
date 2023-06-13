import React from "react"
import { useRoutes } from "react-router-dom"
import BaseLayout from "../layout/BaseLayout/BaseLayout"
import {
    AnalyticsPage,
    DesktopPage,
    DirectoryPage,
    MapPage,
    OrdersPage,
    ProfilePage,
    RoutesPage,
    SignInPage,
    SignUpPage,
    CompaniesListPage,
} from "../pages"
import ForgotPage from "../pages/ForgotPage/ForgotPage"

function AppRoutes() {
    const routes = useRoutes([
        { path: "/sign-in", element: <SignInPage /> },
        { path: "/sign-up", element: <SignUpPage /> },
        { path: "/forgot-pas", element: <ForgotPage /> },
        {
            path: "/",
            element: (
                <BaseLayout>
                    <CompaniesListPage />
                </BaseLayout>
            ),
        },
        {
            path: "/profile",
            element: (
                <BaseLayout>
                    <ProfilePage />
                </BaseLayout>
            ),
        },
        {
            path: "/desktop",
            element: (
                <BaseLayout>
                    <DesktopPage />
                </BaseLayout>
            ),
        },
        {
            path: "/orders",
            element: (
                <BaseLayout>
                    <OrdersPage />
                </BaseLayout>
            ),
        },
        {
            path: "/routes",
            element: (
                <BaseLayout>
                    <RoutesPage />
                </BaseLayout>
            ),
        },
        {
            path: "/map",
            element: (
                <BaseLayout>
                    <MapPage />
                </BaseLayout>
            ),
        },
        {
            path: "/directory",
            element: (
                <BaseLayout>
                    <DirectoryPage />
                </BaseLayout>
            ),
        },
        {
            path: "/analytics",
            element: (
                <BaseLayout>
                    <AnalyticsPage />
                </BaseLayout>
            ),
        },
    ])
    return routes
}

export default AppRoutes
