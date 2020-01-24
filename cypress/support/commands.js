/* eslint-disable jest/no-standalone-expect,jest/valid-expect */
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('focusMasked', { prevSubject: 'element' }, (subject) => cy
  .wrap(subject)
  .focus()
  .wait(20)
  .type('{uparrow}')
  .clear());

Cypress.Commands.add('name', (searchName) => {
  cy.get(`[name="${searchName}"]`);
});

Cypress.Commands.add('nameChild', { prevSubject: 'element' }, (parent, searchName) => {
  cy.get(parent)
    .children(`[name="${searchName}"]`);
});

Cypress.Commands.add('shouldBeAbove', { prevSubject: 'element' }, (topElement, bottomElement) => {
  let topElementCoords;
  let bottomElementCoords;
  cy
    .get(topElement).then(($topElement) => {
    topElementCoords = $topElement[0].getBoundingClientRect();
  })
    .get(bottomElement).then(($bottomElement) => {
    bottomElementCoords = $bottomElement[0].getBoundingClientRect();
  })
    .expect(topElementCoords.bottom).to.be.greaterThan(bottomElementCoords.top)
    .expect(topElementCoords.bottom - bottomElementCoords.top).to.be.lessThan(10);
});

Cypress.Commands.add('isInViewport', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).then(($el) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
  });
});
