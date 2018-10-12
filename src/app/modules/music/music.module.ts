import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DisplayMusicComponent } from './display-music/display-music.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayMusicComponent],
  exports: [DisplayMusicComponent]
})
export class MusicModule { }
