window.onload = function() {
  var save = document.getElementById('save-button');
  save.addEventListener('click', appendIdeas)
  appendIdeas();
}

function appendIdeas(){
  var ideas = localStorage.getItem('ideabox')
  var list = document.getElementById('ideas')
  var ul = document.createElement('ul');
  var idea = list.appendChild(ul);
  if (ideas !== null) {
    var ideasJSON = JSON.parse(localStorage.getItem('ideabox'));
    for (var i = 0; i < ideasJSON.length; i++) {

      var li = document.createElement('li');

      ul.className = "my-ideas";
      li.innerHTML = `<h3 class="idea-title">${ideasJSON[i].title}<img class='del-svg' src="icons/delete.svg"></h3><p>${ideasJSON[i].idea}</p><img class='vote up-svg' src="icons/upvote.svg"><img class='vote down-svg' src="icons/downvote.svg"><p class="quality">quality: swill</p>`

      ul.appendChild(li)
    }
  }
  upVote()
  downVote()
  deleteButton()
  removeIdea()
}

function deleteButton() {
  var deletebuttons = document.getElementsByClassName('del-svg');
  for (var i = 0; i < deletebuttons.length; i++) {
    deletebuttons[i].addEventListener("mouseover", function(){
      this.src = "icons/delete-hover.svg";
    })
    deletebuttons[i].addEventListener("mouseout", function(){
      this.src = "icons/delete.svg";
    })
  }
}

function upVote() {
  var upvote = document.getElementsByClassName('up-svg');
  for (var i = 0; i < upvote.length; i++) {
    upvote[i].addEventListener("mouseover", function(){
      this.src = "icons/upvote-hover.svg";
    })
    upvote[i].addEventListener("mouseout", function(){
      this.src = "icons/upvote.svg";
    })
  }
}

function downVote() {
  var downvote = document.getElementsByClassName('down-svg');
  for (var i = 0; i < downvote.length; i++) {
    downvote[i].addEventListener("mouseover", function(){
      this.src = "icons/downvote-hover.svg";
    })
    downvote[i].addEventListener("mouseout", function(){
      this.src = "icons/downvote.svg";
    })
  }
}
