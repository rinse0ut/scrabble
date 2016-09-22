export function addResponse(response){
  return {
    type: 'ADD_RESPONSE',
    response: response.toUpperCase()
  }
}

export function incrementLetter(key){
  return {
    type: 'INCREMENT_LETTER',
    key: key
  }
}
