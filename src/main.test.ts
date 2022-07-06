import { assertEquals } from 'asserts'
  import { add } from './index.ts'

  Deno.test('addition works', () => {
    assertEquals(add(1,2), 3)
  })