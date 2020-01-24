/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultButtonGroupTheme as theme } from '../../../leda/components/ButtonGroup/theme';

describe('ButtonGroup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/button-group');
  });

  describe('Display', () => {
    it('should render all the buttons in the group', () => {
      cy.get(`.${theme.wrapper}`)
        .eq(0)
        .find(`.${theme.button}`)
        .should('have.length', 3);
    });

    it('should render selected button with active class', () => {
      cy.get(`.${theme.wrapper} .${theme.button}`)
        .eq(9)
        .should('have.class', 'active')
        .get(`.${theme.wrapper} .${theme.button}`)
        .eq(7)
        .should('have.class', 'active');
    });
  });

  describe('Interaction', () => {
    it.skip('should ignore clicks when isDisabled', () => {
      cy.contains('isDisabled')
        .click()
        .get(`.${theme.buttonsWrapper}`)
        .eq(0)
        .should('have.class', 'disabled')
        .get(`.${theme.wrapper}`)
        .eq(0)
        .find(`.${theme.button}`)
        .eq(1)
        .should('not.have.class', 'active')
        .click()
        .should('not.have.class', 'active');
    });

    it.skip('should select button on click', () => {
      cy.get(`.${theme.wrapper}`)
        .eq(0)
        .find(`.${theme.button}`)
        .eq(1)
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .get(`.${theme.wrapper}`)
        .eq(1)
        .find(`.${theme.button}`)
        .eq(2)
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .get(`.${theme.wrapper}`)
        .eq(2)
        .find(`.${theme.button}`)
        .eq(0)
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active');
    });

    it('should allow only one pressed button in Radio mode', () => {
      cy.get(`.${theme.wrapper}`)
        .eq(1)
        .find(`.${theme.button}`)
        .eq(0)
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .next()
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .prev()
        .should('not.have.class', 'active');
    });

    it('should allow multiple pressed buttons in Checkbox mode', () => {
      cy.get(`.${theme.wrapper}`)
        .eq(2)
        .find(`.${theme.button}`)
        .eq(0)
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .next()
        .next()
        .should('not.have.class', 'active')
        .click()
        .should('have.class', 'active')
        .prev()
        .should('have.class', 'active')
        .prev()
        .should('have.class', 'active')
        .click()
        .should('not.have.class', 'active')
        .next()
        .click()
        .should('not.have.class', 'active')
        .next()
        .click()
        .should('not.have.class', 'active');
    });
  });
});
