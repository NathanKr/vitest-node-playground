import {test,expect} from 'vitest'
import { sum } from '../src/utils'

test('sum(1,2) is 3',()=>{
    expect(sum(1,2)).toBe(3)
})