function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const target = document.getElementById('nested').getElementsByClassName('target')
  return target[0]
}

function increaseRankBy(n){
  const incrementer = document.querySelectorAll('ul.ranked-list li')
  const nParsed = parseInt(n)
  for (let i = 0; i <incrementer.length; i++){
    j=parseInt(incrementer[i].innerHTML)
    incrementer[i].innerHTML = (j+nParsed).toString()
  }
}

function deepestChild(){
  var nash = document.getElementById('grand-node')
  while (nash.children[0]){
    nash= nash.children[0]
  }
  return nash
}
