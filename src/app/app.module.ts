import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
var config = {
	apiKey: 'AIzaSyAVXsiI_RHlq5hoXRkUYaL8vSxX2vzUz1U',
	authDomain: 'fir-chat-1dcec.firebaseapp.com',
	databaseURL: 'https://fir-chat-1dcec.firebaseio.com',
	projectId: 'fir-chat-1dcec',
	storageBucket: 'fir-chat-1dcec.appspot.com',
	messagingSenderId: '899797282280'
};
@NgModule({
	declarations: [ AppComponent, ChatComponent, MessageComponent, InputComponent ],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(config),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
