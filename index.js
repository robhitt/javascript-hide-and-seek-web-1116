function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('div#nested div.target')
}


function increaseRankBy(n) {
  var n = parseInt(n)
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  // div#grand-node
  const lis = document.querySelector('div#grand-node')
  var arr = lis.getElementsByTagName('div')
  var l = arr.length

  return arr[l-1]
}
