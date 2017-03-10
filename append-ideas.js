window.onload = function() {
  appendIdeas();
  upVote()
  downVote()
  deleteButton()
  var save = document.getElementById('save-button');
  save.addEventListener('click', appendIdeas)
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

function appendIdeas(){
  var ideas = JSON.parse(localStorage.getItem('ideabox'))
  var list = document.getElementById('my-ideas')

  for (var i = 0; i < ideas.length; i++) {

    var li = document.createElement("li");
    li.className = "idea-cell";

    var a = document.createElement('a');
    a.innerHTML = `<h3 class="idea-title"><p>${ideas[i].title}<img class='del-svg' src="icons/delete.svg"></h3></p>${ideas[i].idea}</p><p><img class='vote up-svg' src="icons/upvote.svg"><img class='vote down-svg' src="icons/downvote.svg"><p class="quality">quality: swill</p>`

    list.appendChild(li);
    li.appendChild(a)
  }
}
