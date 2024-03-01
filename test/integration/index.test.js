import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { SAILBOAT_URL } from './setup.js'

describe('echo tests', async () => {

  it('shows "Hello World!"', async () => {
    const res = await fetch(`${SAILBOAT_URL}`)
    const body = await res.text()
    assert.equal(body, '<!DOCTYPE html>\n<title>Hello World</title>\n<h1>Hello World!</h1>')
  })

})
