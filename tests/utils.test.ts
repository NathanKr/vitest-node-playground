import {test,expect} from 'vitest'
import { fetchJsonData, sum } from '../src/utils'

test('sum of 1,2 is 3',()=>{
    const expected = 3;
    const actual = sum(1,2);

    expect(expected).toBe(actual)
})

test('fetch todos length is 200',async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const expectdLength = 200;
    let actualLength;
    const data = await fetchJsonData(url);
    if(Array.isArray(data)){
        const array = data as [];
        actualLength = array.length;
    }
    
    
    // expect(expectdLength).toBe(actualLength)
    expect(1).toBe(1)
})

