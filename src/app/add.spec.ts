import {add} from "./add";

describe('add', () => {
  it('should correctly add two numbers', () => {
    const result = add(5,1);
    expect(result).toBe(6)
  })

  it('should correctly add two negative numbers', () => {
    const result = add(-1, -3);
    expect(result).toBe(-4)
  })
})
