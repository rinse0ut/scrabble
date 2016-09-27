/**
 * Mocking client-server processing
 */
import _letters from './letters.json'

const TIMEOUT = 100

export default {
  getLetters(cb, timeout) {
    setTimeout(() => cb(_letters), timeout || TIMEOUT)
  }
}
