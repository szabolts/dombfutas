import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/server/database'

/*
	You can use a custom redirect if you want...

	function redirect(location: string) {
		return new Response(undefined, {
			status: 303,
			headers: { location },
		})
	}

	...and redirect pages inside hooks.server.ts

	if (!session) {
		if (event.url.pathname === '/admin') {
			return redirect('/')
		}

		return await resolve(event)
	}

	...but doing it inside `load` for the protected
	routes you can invalidate the data on the page
*/

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session')

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { email: true, role: true },
	})

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			name: user.email,
			role: user.role.name,
		}
	}

	// load page as normal
	return await resolve(event)
}