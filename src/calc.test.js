import { add } from './calc.js';

describe('Using basic Matchers in Jest', () => {
  it('toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('Terry').toEqual('Terry');
    expect({name: 'Terry'}).toEqual({name: 'Terry'})
  })

  it('toBe', () => {
    expect(1 + 1).toBe(2);
    expect('Terry').toBe('Terry');
  })

  it('Not equal', () => {
    expect(1 + 1).not.toEqual(1);
  })


  it('Regular expression', () => {
    expect('terry').toMatch(/\w+/);
  })

  it('compare numbers', () => {
    expect(1 + 1).toBeGreaterThan(1)
    expect(1 + 1).toBeGreaterThanOrEqual(2)
  })
})

describe('Matchers for Array and Object in Jest', () => {
  const users = ['Terry', 'Alex', 'Sam'];

  it('match arrays', () => {
    expect(users).toContainEqual('Terry')
    expect(users).toContain(users[0]);
  })

  it('object in array', () => {
    const users = [
      {name: 'Terry'},
      {name: 'Alex'}
    ]
    expect(users).toContainEqual({name: 'Terry'})
  })


  it('match object props', () => {
    const user = {
      name: 'Terry',
      address: 'Hong Kong, China'
    }
    expect(user.name).toBeDefined()
    expect(user.age).not.toBeDefined()
  })
})

describe('calculator', () => {
  it('add two numbers', () => {
    expect(add(1,2)).toEqual(3)
  })
})
