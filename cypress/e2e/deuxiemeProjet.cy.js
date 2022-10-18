/// <reference types="cypress"/>

describe('Test 1',()=>{
    //Visiter le site
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Athentification echec',()=>{
        cy.visit('/')
        cy.get('input[data-test="username"]').type('mail@mail.com')
        cy.get('input[data-test="password"]').type('123456')
        cy.wait(2000)
        cy.get('input[data-test="login-button"]').click()
        cy.wait(2000)
        cy.get('h3[data-test="error"]').should('be.visible')//be.visible est plus sûr que exist
        cy.get('h3[data-test="error"]').should("contain.text","Epic sadface: Username and password do not match any user in this service")
    })

    it('Athentification reussi',()=>{
        cy.get('input[data-test="username"]').type('standard_user')
        cy.get('input[data-test="password"]').type('secret_sauce')
        cy.wait(2000)
        cy.get('input[data-test="login-button"]').click()
        cy.wait(2000)
        cy.url().should('equal','https://www.saucedemo.com/inventory.html')
        cy.wait(2000)
    })
})