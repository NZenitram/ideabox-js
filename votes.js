function upVoting(){
  var upVote = document.getElementsByClassName('up-svg')
  for (var i = 0; i < upVote.length; i++) {
    upVote[i].addEventListener('click', upQuality)
  }
}

function downVoting(){
  var downVote = document.getElementsByClassName('down-svg')
  for (var i = 0; i < downVote.length; i++) {
    downVote[i].addEventListener('click', downQuality)
  }
}

function upQuality() {
  var title = this.parentElement.children[0].innerText
  var currentQuality = this.parentElement.children[4].innerHTML
  var newQuality = this.parentElement.children[4]
  if (currentQuality === "quality: swill") {
    var quality = newQuality.innerHTML = "quality: average"
  } else if (currentQuality === "quality: average") {
    var quality = newQuality.innerHTML = "quality: great"
  } else if (newQuality.innerHTML = "quality: great") {
    var quality = newQuality.innerHTML = "quality: great"
  }
  updateStorage(title, quality)
}

function downQuality() {
  var title = this.parentElement.children[0].innerText
  var currentQuality = this.parentElement.children[4].innerHTML
  var newQuality = this.parentElement.children[4]
  if (currentQuality === "quality: great") {
    var quality = newQuality.innerHTML = "quality: average"
  } else if (currentQuality === "quality: average") {
    var quality = newQuality.innerHTML = "quality: swill"
  } else if (newQuality.innerHTML = "quality: swill") {
    var quality = newQuality.innerHTML = "quality: swill"
  }
  updateStorage(title, quality)
}

function updateStorage(title, quality) {
  var ideas = JSON.parse(localStorage.getItem('ideabox'))
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].title === title) {
      ideas[i].quality = quality
    }
  }
  localStorage.setItem('ideabox', JSON.stringify(ideas));
  clearList()
}
