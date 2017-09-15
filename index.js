function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const target = document.getElementById('nested').getelementByClassNameI('target')
  return target
}

function increaseRankBy(n){
  const incrementer = document.getElementByTag('li').querySelectorAll('ul.ranked-list li')
  const nParsed = parseInt(n)
  for (let i = 0; i <incrementer.length; i++){
    incrementer[i].innerHTML = (i+nParsed).toString()
  }
}

function deepestChild(){
  var nash = document.getElementsByIdName('grand-node').querySelector('div')
  while (nash.children()){
    nash= nash.children()
  }
  return nash
}
