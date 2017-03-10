window.onload = function() {
  var save = document.getElementById('save-button');
  save.addEventListener('click', appendIdeas)
  // appendIdeas()
}

function appendIdeas(){
  var ideas = JSON.parse(localStorage.getItem('ideabox'))
  var list = document.getElementById('my-ideas')

  for (var i = 0; i < ideas.length; i++) {

    var li = document.createElement("li");
    li.className = "idea-cell";

    var a = document.createElement('a');
    a.innerHTML = `<h3 class="idea-title">${ideas[i].title}<img class='del-svg' src="icons/delete.svg"></h3><p>${ideas[i].idea}</p><img class='vote up-svg' src="icons/upvote.svg"><img class='vote down-svg' src="icons/downvote.svg">`

    list.appendChild(li);
    li.appendChild(a)
  }
}
