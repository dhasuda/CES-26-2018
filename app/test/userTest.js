'use strict'

const User = require('../models/User')
const expect = require('chai').expect

describe('User module', () => {
  describe('Save', () => {
    it('should be a function', () => {
      expect(User.save).to.be.a('function')
    })
  })

  describe('findByUsername', () => {
    it('should be a function', () => {
        expect(User.save).to.be.a('function')
    })
  })
})

