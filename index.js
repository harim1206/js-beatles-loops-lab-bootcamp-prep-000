
function theBeatlesPlay(musicians,instruments){

  var stringArr = []

  for(i=0; i<musicians.length; i++){

    stringArr.push(`${musicians[i]} plays ${instruments[i]}`)

  }

  return stringArr
}
