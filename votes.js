function upQuality() {
  var currentQuality = this.parentElement.children[4].innerHTML
  var newQuality = this.parentElement.children[4]
  if (currentQuality === "quality: swill") {
    newQuality.innerHTML = "quality: average"
  } else if (currentQuality === "quality: average") {
    newQuality.innerHTML = "quality: great"
  } else if (newQuality.innerHTML = "quality: great") {
    newQuality.innerHTML = "quality: great"
  }
}

function downQuality() {
  var currentQuality = this.parentElement.children[4].innerHTML
  var newQuality = this.parentElement.children[4]
  if (currentQuality === "quality: great") {
    newQuality.innerHTML = "quality: average"
  } else if (currentQuality === "quality: average") {
    newQuality.innerHTML = "quality: swill"
  } else if (newQuality.innerHTML = "quality: swill") {
    newQuality.innerHTML = "quality: swill"
  }
}
