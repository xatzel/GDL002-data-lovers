require('../src/data.js');
const lol = require ('../scr/data/lol/lol.js');
describe ('Lol', ()=>{
  it ('should be an object', () => {
    expect (typeof lol).toBe('object');
  });
});
describe('my awsome function', () =>{
  it ('should return Aatrox name', () => {
    expect (dataLovers.showAatroxName(lol)).toBe('Aatrox');
  });
});
/*describe('filter',()=>{
  it ('should filter my Lol by name', () => {
    expect(filterLol(lol,'nombre')).toBe();
  });
});
/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
