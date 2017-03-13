function searchIdeas() {
  var search = document.getElementById('search-input')
  var filter = search.value.toUpperCase();
  var list = document.getElementById('my-ideas')
  var li = list.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    if (h3) {
      if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}
