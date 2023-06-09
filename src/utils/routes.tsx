import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";
import LoadingSpinner from '@/components/LoadingSpinner';
import DashboardPage from "@/pages/DashboardPage";
const ProtectedRoute = lazy(() => import("@/components/ProtectedRoute"))
const ProtectedAuthRoute = lazy(() => import("@/components/ProtectedAuthRoute"))
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const DashboardMainPage = lazy(() => import("@/pages/DashboardMainPage"));
const UsersPage = lazy(() => import("@/pages/UsersPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const UserDetailsPage = lazy(() => import("@/pages/UserDetailsPage"));




export default function GetRoutes() {
    return (
        <>
            <Route
                path='/login'
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProtectedAuthRoute>
                            <LoginPage />
                        </ProtectedAuthRoute>
                    </Suspense>
                }
                errorElement={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ErrorPage />
                    </Suspense>
                }
            />
            <Route
                path='/'
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    </Suspense>
                }
                errorElement={
                    <Suspense fallback={<LoadingSpinner />}>
                        <ErrorPage />
                    </Suspense>
                }
            >
                <Route
                    index={true}
                    element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <DashboardMainPage />
                        </Suspense>
                    }
                    errorElement={
                        <Suspense fallback={<LoadingSpinner />}>
                            <ErrorPage />
                        </Suspense>
                    }
                />
                <Route
                    path='/users'
                    element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <UsersPage />
                        </Suspense>
                    }
                    errorElement={
                        <Suspense fallback={<LoadingSpinner />}>
                            <ErrorPage />
                        </Suspense>
                    }
                />
                <Route
                    path='/users/:userId'
                    element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <UserDetailsPage />
                        </Suspense>
                    }
                    errorElement={
                        <Suspense fallback={<LoadingSpinner />}>
                            <ErrorPage />
                        </Suspense>
                    }
                />


            </Route>
        </>

    )
}