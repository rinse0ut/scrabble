export function addResponse(response){
  return {
    type: 'ADD_RESPONSE',
    response: response.toUpperCase()
  }
}

export function setLetter(key, value){
  return {
    type: 'SET_LETTER',
    key: key,
    value: value
  }
}
