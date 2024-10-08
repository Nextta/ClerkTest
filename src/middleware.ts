import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(['/aula(.*)', '/adp(.*)', '/adpcurso(.*)', '/checkout(.*)', '/lives-sessions(.*)', '/lives-sessions(.*)', '/miscursos(.*)', '/msg(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
    const { redirectToSignIn, userId } = auth()

    if (!userId && isProtectedRoute(context.request)) {
        return redirectToSignIn()
    }
});