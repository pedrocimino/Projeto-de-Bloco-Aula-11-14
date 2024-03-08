import { assert } from "chai";

describe("Canary Tests", function() {
  
  it("should pass", function(){
    const result = true;
    assert.isTrue(result);
    assert.equal(result, true);
  });

  it("should pass", function(){
    const result = false;
    assert.isFalse(result);
    assert.notEqual(result, true);
     });
})




// // Teste que eu sei que irá passar
// describe("Canary Tests", function() {
//  //Coleção de testes desta suite
//   it("should pass", function(){
//     //Verificar se true = true
//     const result = true;
//     assert.isTrue(result);
//   });
// })