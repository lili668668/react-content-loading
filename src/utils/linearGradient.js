class linearGradient {
  constructor () {
    this.definition = ''
    this.stops = []
  }

  angle(angle) {
    if (typeof angle === 'number') this.definition = `${angle}deg`
    else if (typeof angle === 'string') this.definition = angle
    else throw new TypeError('Please input number or string.')
    return this
  }

  to(...sides) {
    if (sides.length === 0) throw new TypeError('Please input string.')
    this.definition = `to ${sides.join(' ')}`
    return this
  }

  appendColorStop(color, length) {
    if (length !== undefined) this.stops.push(`${color} ${length}`)
    else this.stops.push(color)
    return this
  }

  toString() {
    return `linear-gradient(${this.definition}, ${this.stops.join(', ')})`
  }
}

export default linearGradient
