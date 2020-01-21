/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../leda/components/AutoComplete/theme';

describe('AutoComplete', () => {
  let lastConsole
  let stub
  before(() => {
    cy.visit('http://localhost:9000/cypress/autocomplete')
  });
  
  describe('Display', () => {
    //FEND-920
    it('should render placeholder', () => {
      cy.name('AutoComplete1')
        .should('have.attr', 'placeholder', 'Type your city...');
    });

    //FEND-921
    it('should render ClearButton', () => {
      cy.name('AutoComplete6')
        .clear()
        .type('Paris')
        .parent()
        .children('i.autocomplete-clear-icon')
        .should('be.visible');
    });

    //FEND-922
    it('should render SuggestionList when isOpen', () => {
      cy.name('AutoComplete6')
        .clear()
        .blur()
        .parent()
        .children('.suggestion-wrapper')
        .should('be.visible')
        .children('.suggestion-list')
        .should('be.visible')
        .children('.suggestion-item')
        .should('have.length', 2);
    });
    
    describe('noSuggestionsRender', () => {
      //FEND-923
      it('defaultMessage', () => {
        cy.name('AutoComplete1')
          .clear()
          .type('Z')
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'Ничего не найдено')
      })

      //FEND-924
      it('customMessage', () => {
        cy.name('AutoComplete3')
          .clear()
          .type('Z')
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'набери что-то, что я знаю')
      })

      //FEND-925
      it('nullMessage', () => {
        cy.name('AutoComplete6')
          .clear()
          .type('Z')
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('not.exist')
      })
    });

    //FEND-926
    it('should render loader when isLoading', () => {
      cy.name('AutoComplete5')
        .clear()
        .type('z')
        .parent()
        .find('.loader-container')
        .should('be.visible')
        .children('.loader-element')
        .should('be.visible');

    });

    //FEND-927
    it('should be disabled when isDisabled', () => {
      cy.name('AutoComplete4')
        .should('be.disabled')
        .should('have.class', 'disabled');
    });
    
    describe('itemRender', () => {

      //FEND-928
      it('bold', () => {
        cy.name('AutoComplete3')
          .clear()
          .type('n')
          .parent().contains('Berlin')
          .should('have.class', 'txt-bold')
          .should('not.have.class', 'txt-success')
      })

      //FEND-929
      it('succes', () => {
        cy.name('AutoComplete3')
          .clear()
          .type('n')
          .parent().contains('Bangkok')
          .should('not.have.class', 'txt-bold')
          .should('have.class', 'txt-success')
      })

      //FEND-930
      it('none', () => {
        cy.name('AutoComplete3')
          .clear()
          .type('n')
          .parent().contains('New York')
          .should('not.have.class', 'txt-bold')
          .should('not.have.class', 'txt-success')
      })
    });
  });

  describe('minSearchLength', () => {
    //FEND-931
    it('0', () => {
      cy.name('AutoComplete1')
        .clear()
        .parent()
        .children('.suggestion-wrapper')
        .should('be.visible')
        .children('.suggestion-list')
        .children('.suggestion-item')
        .should('have.length', 10);
    })

    //FEND-932
    it('3', () => {
      cy.name('AutoComplete2')
        .clear()
        .type('Lo')
        .parent()
        .find('.suggestion-list')
        .should('not.be.visible')
      cy.name('AutoComplete2')
        .clear()
        .type('Lon')
        .parent()
        .find('.suggestion-list')
        .should('be.visible')
        .children('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London');
    })
  })

  describe('FilterRule', () => {
    //FEND-933
    it('includes', () => {
      cy.name('AutoComplete3')
        .clear()
        .type('don')
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London (region: Europe)')
        .name('AutoComplete3')
        .clear()
        .type('don lon')
        .parent()
        .find('.suggestion-wrapper .nodata')
        .should('be.visible')
    })

    //FEND-934
    it('smart', () => {
      cy.name('AutoComplete2')
        .clear()
        .type('don')
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London')
        .name('AutoComplete2')
        .clear()
        .type('don lon')
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London');
    })

    //FEND-935
    it('startsWith', () => {
      cy.name('AutoComplete1')
        .clear()
        .type('lon')
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London')
        .name('AutoComplete1')
        .clear()
        .type('don')
        .parent()
        .find('.suggestion-wrapper .nodata')
        .should('be.visible')
    })
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/autocomplete', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev })
        },
      })
    })

    //FEND-936
    it('onBlur', () => {
      cy.name('AutoComplete2')
        .clear()
        .type('London')
        .blur()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'blur')
          expect(lastConsole.component).to.have.property('name', 'AutoComplete2')
          expect(lastConsole.component).to.have.property('value', 'London')
        })
    })

    //FEND-937
    it('onFocus', () => {
      cy.name('AutoComplete6')
        .focus()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'focus')
          expect(lastConsole.component).to.have.property('name', 'AutoComplete6')
          expect(lastConsole.component).to.have.property('value', '')
        })
    })

    //FEND-938
    it('OnChange', () => {
      cy.name('AutoComplete3')
        .clear()
        .type('lon')
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'change')
          expect(lastConsole.component).to.have.property('name', 'AutoComplete3')
          expect(lastConsole.component).to.have.property('method', 'type')
          expect(lastConsole.component).to.have.property('value', 'lon')
          expect(lastConsole.component).to.have.property('suggestion', null)
        })
        .parent()
        .find('.suggestion-item')
        .click()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'click')
          expect(lastConsole.component).to.have.property('name', 'AutoComplete3')
          expect(lastConsole.component).to.have.property('method', 'click')
          expect(lastConsole.component).to.have.property('value', 'London')
          expect(lastConsole.component.suggestion).to.have.property('name', 'London')
          expect(lastConsole.component.suggestion).to.have.property('region', 'Europe')
        })
    })
  });

  describe('Interaction', () => {
    it('should allow input and remove chars', () => {
      cy.name('AutoComplete1')
        .clear()
        .type('Mo')
        .should('have.value', 'Mo')
        .parent()
        .find('.suggestion-item')
        .click()
        .name('AutoComplete1')
        .should('have.value', 'Moscow')
        .type('{backspace}'.repeat(5))
        .should('have.value', 'M')
        .parent()
        .find('.suggestion-item')
        .first()
        .click()
        .name('AutoComplete1')
        .should('have.value', 'Magadan');
    });

    it('should clear input on clear button click', () => {
      cy.name('AutoComplete6')
        .clear()
        .type('Paris')
        .parent()
        .children('i.autocomplete-clear-icon')
        .click()
        .name('AutoComplete6')
        .should('have.value', '');
    });

    xit('should forbid non data values when shouldCorrectValues', () => {
      cy.get(`.${theme.wrapper} input`)
        .eq(2)
        .clear()
        .type('Lodon')
        .should('have.value', 'Lodon')
        .blur()
        .should('have.value', '')
        .focus()
        .type('London')
        .should('have.value', 'London')
        .blur()
        .should('have.value', '');
    });
  });
});
