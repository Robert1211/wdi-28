const votes = document.querySelector('#votes');
const upvoteButton = document.querySelector('#upvote');
const downvoteButton = document.querySelector('#downvote');

upvoteButton.addEventListener('click', function () {
  const score = Number( votes.innerHTML );

  if (upvoteButton.classList.contains('voted')) { // cancel
    upvoteButton.classList.remove('voted');
    votes.innerHTML = score - 1;
  } else if (downvoteButton.classList.contains('voted')){
    upvoteButton.classList.add('voted');
    downvoteButton.classList.remove('voted');
    votes.innerHTML = score + 2;
  } else { // register
    upvoteButton.classList.add('voted');
    votes.innerHTML = score + 1;
  }

});

downvoteButton.addEventListener('click', function () {
  const score = Number( votes.innerHTML );

  if (downvoteButton.classList.contains('voted')) { // cancel
    downvoteButton.classList.remove('voted');
    votes.innerHTML = score + 1;
  } else if (upvoteButton.classList.contains('voted')){
    downvoteButton.classList.add('voted');
    upvoteButton.classList.remove('voted');
    votes.innerHTML = score - 2;
  } else { // register
    downvoteButton.classList.add('voted');
    votes.innerHTML = score - 1;
  }
})
