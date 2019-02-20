import LinearGradient from './linearGradient'

describe('linearGradient', () => {
  describe('constructor', () => {
    it ('instance should have definition and stops', () => {
      const instance = new LinearGradient()
      expect(instance.definition).toBe('')
      expect(instance.stops).toEqual([])
    })
  })

  describe ('angle', () => {
    it ('definition of instance should set angle with <number> deg', () => {
      const instance = new LinearGradient().angle(45)
      expect(instance.definition).toBe('45deg')
    })

    it ('definition of instance should set angle with <string>', () => {
      const string = '3.1416rad'
      const instance = new LinearGradient().angle(string)
      expect(instance.definition).toBe(string)
    })

    it ('should throw error', () => {
      const invokeError = () => {
        new LinearGradient().angle()
      }
      expect(invokeError).toThrowError('Please input number or string.')
    })
  })

  describe ('to', () => {
    it ('definition of instance should set to with sides string', () => {
      const instance = new LinearGradient().to('left', 'top')
      expect(instance.definition).toBe('to left top')
    })

    it ('should throw error', () => {
      const invokeError = () => {
        new LinearGradient().to()
      }
      expect(invokeError).toThrowError('Please input string.')
    })
  })

  describe ('appendColorStop', () => {
    it ('stops of instance should have color', () => {
      const instance = new LinearGradient().appendColorStop('#ffffff', '50%')
      expect(instance.stops).toContain('#ffffff 50%')
    })

    it ('stops of instance should have color and its length', () => {
      const instance = new LinearGradient().appendColorStop('#ffffff')
      expect(instance.stops).toContain('#ffffff')
    })
  })

  describe ('toString', () => {
    it ('should return a linear gradient string', () => {
      const string = new LinearGradient()
        .to('right')
        .appendColorStop('#ffadad', '5%')
        .appendColorStop('#e66465', '50%')
        .appendColorStop('#ffadad', '95%')
        .toString()
      expect(string).toBe('linear-gradient(to right, #ffadad 5%, #e66465 50%, #ffadad 95%)')
    })
  })
})
