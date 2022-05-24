// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    cy.get('[name="email"]').type(email).
    cy.get('[name="current-password"]').type(password)
    cy.get('._1VfsI').click()
})

Cypress.Commands.add('register', (email, password) => { 
    cy.get(':nth-child(2) > span').click()
    cy.get('[name="email"]').type(email)
    cy.get('[name="new-password"]').type(password)
    cy.contains('button','Sign up for free').click()
    
})
Cypress.Commands.add('fullname', (Fname, Lname) => { 
    cy.get('[name="first_name"]').type(Fname)
    cy.get('[name="last_name"]').type(Lname)
    cy.contains('button','Continue').click()
})

Cypress.Commands.add('Eregister',  (fname,lname,email,phone,password,cp)=>{
    cy.get('[name="firstname"]').type(fname)
    cy.get('[name="lastname"]').type(lname)
    cy.get('[name="email"]').type(email)
    cy.get('[name="telephone"]').type(phone)
    cy.get('[name="password"]').type(password)
    cy.get('[name="confirm"]').type(cp)
    cy.get('.col-sm-10 > :nth-child(2) > input').check()
    cy.get('[name="agree"]').check()
    cy.get('.pull-right > .btn').click()
})

Cypress.Commands.add('Elogin', (Email, Password) => { 
    cy.get('#input-email').type(Email)
    cy.get('#input-password').type(Password)
    cy.get('form > .btn').click()
})
