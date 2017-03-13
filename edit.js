function editClickBody() {
  var body = document.getElementsByClassName('idea-inner')
  for (var i = 0; i < body.length; i++) {
    body[i].contentEditable = true;
    body[i].addEventListener('blur', editBody)
  }
}


function editClickTitle() {
  var title = document.getElementsByClassName('idea-title')
  for (var i = 0; i < title.length; i++) {
    title[i].contentEditable = true;
    title[i].addEventListener('blur', editBody)
  }
}

function editBody(e){
  e.stopImmediatePropagation();
  var ideas = JSON.parse(localStorage.getItem('ideabox'))
  if (e.which == 13 || e.type == 'blur') {
    var newContent = this.innerText
    var title = this.parentElement.children[0].innerText
  }
  search(title, ideas, newContent)
}

function search(nameKey, localStorage, newContent){
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage[i].title === nameKey) {
      updateLocal(localStorage[i], localStorage, newContent)
    }
  }
}

function updateLocal(idea, newIdeas, newContent){
  idea.idea = newContent
  localStorage.setItem('ideabox', JSON.stringify(newIdeas))
  clearList()
}
