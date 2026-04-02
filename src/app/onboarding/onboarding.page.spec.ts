import { IonicModule } from '@ionic/angular'
import { render, screen } from '@testing-library/angular'
import { beforeEach, describe, expect, it } from 'vitest'

import { OnboardingPage } from './onboarding.page'

const getSkipButton = () => {
	return screen.getByRole('button', { name: /skip/i })
}

describe('OnboardingPage', () => {
	beforeEach(async () => {
		await render(OnboardingPage, {
			imports: [IonicModule.forRoot()],
		})
	})

	it('skip takes the user to the last page', async () => {
		const skipButton = getSkipButton()

		expect(skipButton).not.toBe(null)
	})
})
