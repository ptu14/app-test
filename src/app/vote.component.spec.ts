import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
  it('should totalVotes been increment on upVote', () => {
    let component = new VoteComponent();
    component.upVote();
    expect(component['totalVotes']).toBe(1);
  })

  it('should totalVotes been decrement on downVote', () => {
    let component = new VoteComponent(); // problematyczne bo się zaczyna powtarzać, na razie to jedna linijka ale moze być więcej.
    component.downVote();
    expect(component['totalVotes']).toBe(-1);
  })
})
