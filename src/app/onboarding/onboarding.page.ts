import { Component } from '@angular/core'
import { IonButton, IonContent } from '@ionic/angular/standalone'

@Component({
	selector: 'app-onboarding',
	templateUrl: './onboarding.page.html',
	styleUrls: ['./onboarding.page.scss'],
	standalone: true,
	imports: [IonContent, IonButton],
})
export class OnboardingPage {
	protected skip() {
		console.log('skip')
	}
}
