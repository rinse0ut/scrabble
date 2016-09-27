/**
 * Mocking client-server processing
 */
import _words from './words.json'

const TIMEOUT = 100

export default {
  getWords(cb, timeout) {
    setTimeout(() => cb(_words), timeout || TIMEOUT)
  }
}
