import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'

import { db } from '$lib/server/database'

// using an enum for user roles to avoid typos
// if you're not using TypeScript use an object
enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')
        const name = data.get('name')
        const birthDate = data.get('birthDate')
        const gender = data.get('gender')

		if (
			typeof email !== 'string' ||
			typeof password !== 'string' ||
            typeof name !== 'string' ||
            typeof gender !== 'string' ||

			!email ||
			!password ||
            !name ||
            !birthDate ||
            !gender

		) {
			return fail(400, { invalid: true })
		}

		const user = await db.user.findUnique({
			where: { email },
		})

		if (user) {
			return fail(400, { user: true })
		}

		await db.user.create({
			data: {
				email,
				passwordHash: await bcrypt.hash(password, 10),
                name,
                birthDate,
                gender,
				userAuthToken: crypto.randomUUID(),
				role: { connect: { name: Roles.USER } },
			},
		})

		throw redirect(303, '/login')
	},
}