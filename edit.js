function editClickBody() {
  var body = document.getElementsByClassName('idea-inner')
  for (var i = 0; i < body.length; i++) {
    body[i].addEventListener('click', editBody)
  }
}


function editClickTitle() {
  var title = document.getElementsByClassName('idea-title')
  for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', editBody)
  }
}

function editBody(){
  this.contentEditable = true;
}
