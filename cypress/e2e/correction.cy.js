/// <reference types="cypress" />

describe('Younited Test Suite', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.get('button[id = "didomi-notice-agree-button"]').click()
    })
    
    it('Test Profil 1', () => {
      
      //Page 1 --------------------------------------------------
      //Page d'Email
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/email")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez email et Continuer
      cy.get('input[data-di-id = "#email-input"]').type("email@email.com")
      cy.get('button[data-test = "navigator-compact-forward"]').click({force : true})
  
      //Page 2 --------------------------------------------------
      //Page Situation Familliale
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/familysituation")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez les informations et Continuer
      cy.get('select[data-di-id = "maritalStatus"]').select(0)
      cy.get('select[data-di-id = "childNumberPropal"]').select(0)
      cy.get('input[id = "yucSelectAllOptins-input"]').check()
      cy.get('inout[id = "yucOptin-input"]').uncheck()
      cy.get('button[data-test = "navigator-compact-forward"]').click()
  
      //Page 3 --------------------------------------------------
      //Page Logement
      cy.url().should("equal", "https://fr-simulation.younited-credit.com/housing")
      cy.title().should("equal", "Younited Credit")
  
      //Entrez les informations et Continuer
      cy.get('select[id = "housingStatus-input"]').select(0)
      cy.get('input[data-di-id = "#housingStatusFrom-input-month"]').type("01")
      cy.get('input[data-di-id = "#housingStatusFrom-input-year"]').type("2001")
    })
})