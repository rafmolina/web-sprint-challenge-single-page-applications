describe('Pizza', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
})
it('checking to see if it works',()=>{
    expect(1+2).to.equal(3)
})
it('new tests', () => {
    cy.get("[data-cy=instructions]")
    .type("instructions")
    .should("have.value", "instructions");
  })