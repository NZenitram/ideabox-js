function removeIdea() {
  var remove = document.getElementsByClassName('del-svg')
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', deleteIdea)
  }
}

function deleteIdea() {
  var item = this.parentElement.parentElement
  var ideas = JSON.parse(localStorage.getItem('ideabox'))
  var title = this.parentElement.innerText
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].title === title) {
      ideas.splice(i, 1)
    }
  }
  localStorage.setItem('ideabox', JSON.stringify(ideas))
  clearList()
}
