function mouseOver(){
  document.getElementById("save-button").style.background = "#045E55";
}

function mouseOut(){
  document.getElementById("save-button").style.background = "#00A79D";
}

function saveIdea(){
  var title = document.getElementById('title')
  var body = document.getElementById('body')
  var save = document.getElementById('button')
  var titleText = title.getElementsByClassName('input-text')[0].value
  var bodyText = body.getElementsByClassName('input-text')[0].value
  clearFields(titleText, bodyText)
  stringifyIdea(titleText, bodyText)
}

function clearFields(titleText, bodyText) {
  titleText = ""
  bodyText = ""
}

function stringifyIdea(titleText, bodyText){
  var oldIdeas = JSON.parse(localStorage.getItem('ideabox')) || [];
  var idea = {'title': titleText, 'idea': bodyText};
  oldIdeas.push(idea);
  localStorage.setItem('ideabox', JSON.stringify(oldIdeas));
}
