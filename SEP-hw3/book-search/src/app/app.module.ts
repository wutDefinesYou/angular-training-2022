import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component'
import { InputBoxComponent } from './input-box/input-box.component'
import { BooklistComponent } from './booklist/booklist.component'


import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'

@NgModule({
    declarations: [AppComponent, HeaderComponent, InputBoxComponent, BooklistComponent, WishlistComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
