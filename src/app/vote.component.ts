export class VoteComponent {
  private totalVotes = 0;

  upVote() {
    this.totalVotes += 1;
  }

  downVote() {
    this.totalVotes -= 1;
  }
}
