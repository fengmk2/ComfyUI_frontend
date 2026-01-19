import { describe, expect } from 'vite-plus/test'

import { LGraphGroup } from '@/lib/litegraph/src/litegraph'

import { test } from './__fixtures__/testExtensions'

describe('LGraphGroup', () => {
  test('serializes to the existing format', () => {
    const link = new LGraphGroup('title', 929)
    expect(link.serialize()).toMatchSnapshot('Basic')
  })
})
