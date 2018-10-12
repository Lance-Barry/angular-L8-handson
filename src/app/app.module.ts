import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';

import { SkillsModule } from './modules/skills/skills.module';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';

@NgModule({
    declarations: [AppComponent, GreetingComponent, MessageFormComponent],
    imports: [BrowserModule, FormsModule, SkillsModule, AppRoutingModule, MoviesModule, MusicModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}