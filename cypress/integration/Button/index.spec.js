/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/button');
  });

  describe('Display', () => {
    it('should render button', () => {
      cy.contains('Клик!')
        .should('be.visible');
    });

    it ('Should be button', () => {
      cy.get('button[type=button]')
      .eq(0)
      .should('have.text','Клик!')
    })
  });

  describe('Interaction', () => {
    it('should call onClick', () => {
      const stub = cy.stub();

      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('Клик!')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('should not call onClick when isLoading', () => {
      const stub = cy.stub();

      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isLoading')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isLoading')
        .should('have.class', 'loading');
    });

    it('should not call onClick when isDisabled', () => {
      const stub = cy.stub();

      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isDisabled')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isDisabled')
        .should('have.class', 'disabled');
    });
  });
});
