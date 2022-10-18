/// <reference types="cypress" />

describe('Le tour',()=>{
    
    beforeEach(()=>{
        cy.visit('/')
        cy.wait(2000)
        cy.url().should("equal","https://www.paris-nice.fr/en/")
    })

    it('Test 1',()=>{

    })
})


// Voici ma modification, 
// c'est important