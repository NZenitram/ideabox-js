// window.onload = function() {
//   removeIdea()
// }

function removeIdea() {
  var remove = document.getElementsByClassName('del-svg')
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', deleteIdea)
  }
}

function deleteIdea() {
  debugger
}
