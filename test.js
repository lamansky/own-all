'use strict'

const assert = require('assert')
const ownAll = require('.')

describe('ownAll()', function () {
  it('should return an object owning all properties of the original object', function () {
    const a = Symbol('a')
    const b = Symbol('b')

    class A {
      get a () { return a }
    }

    class B extends A {
      get b () { return b }
    }

    const obj = new B()
    const before = Reflect.ownKeys(obj)
    assert(!before.includes('a'))
    assert(!before.includes('b'))

    const after = Reflect.ownKeys(ownAll(obj))
    assert(after.includes('a'))
    assert(after.includes('b'))
    assert(after.includes('hasOwnProperty'))
    assert(after.includes('toString'))
  })

  it('should prefer classes lower in the chain if properties are duplicated', function () {
    const a = Symbol('a')
    const b = Symbol('b')

    class A {
      get a () { return a }
    }

    class B extends A {
      get a () { return b }
      get b () { return b }
    }

    assert.strictEqual(ownAll(new B()).a, b)
  })
})
