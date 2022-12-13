import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'like-dislike-buttons';

  likeCount: number = 100
  dislikeCount: number = 25

  liked: boolean = false
  disliked: boolean = false

  onClickLike(): void {
    this.liked
    ? this.decrementLike()
    : this.incrementLike()

    this.liked = !this.liked
    if (this.disliked) {
      this.disliked = false
      this.decrementDislike()
    }
  }

  onClickDislike(): void {
    this.disliked
    ? this.decrementDislike()
    : this.incrementDislike()

    this.disliked = !this.disliked
    if (this.liked) {
      this.liked = false
      this.decrementLike()
    }
  }

  incrementLike(): void {
    this.likeCount += 1
  }

  decrementLike(): void {
    this.likeCount -= 1
  }

  incrementDislike(): void {
    this.dislikeCount += 1
  }

  decrementDislike(): void {
    this.dislikeCount -= 1
  }
}
