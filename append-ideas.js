window.onload = function() {
  var save = document.getElementById('save-button');
  var search = document.getElementById('search-input');
  save.addEventListener('click', clearList)
  search.addEventListener('keyup', searchIdeas)
  appendIdeas();
}

function clearList() {
  var listItems = document.getElementById('my-ideas');
  listItems.innerHTML = '';
  appendIdeas()
}

function appendIdeas(){
  var ideas = localStorage.getItem('ideabox')
  var list = document.getElementById('ideas')
  var ul = document.getElementById('my-ideas')
  if (ideas !== null) {
    var ideasJSON = JSON.parse(localStorage.getItem('ideabox'));
    for (var i = 0; i < ideasJSON.length; i++) {

      var li = document.createElement('li');

      li.className = "ideas-li";

      li.innerHTML = `<h3 class="idea-title">${ideasJSON[i].title}<img class='del-svg' src="icons/delete.svg"></h3><p class ="idea-inner">${ideasJSON[i].idea}</p><img id="up-svg" class='vote up-svg' src="icons/upvote.svg"><img id="down-svg" class='vote down-svg' src="icons/downvote.svg"><p class="quality">${ideasJSON[i].quality}</p>`

      ul.appendChild(li)
    }
  }
  upVote()
  downVote()
  deleteButton()
  removeIdea()
  upVoting()
  downVoting()
  editClickBody()
  editClickTitle()
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
