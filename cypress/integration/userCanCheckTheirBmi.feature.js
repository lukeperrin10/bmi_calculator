// userCanCheckTheirBmi.feature.js 

describe('User can check their BMI', () => {

    before (() => {
        cy.visit('/')
    });

    it('is expected to show the title of the page', () => {
        cy.get('h1').should('contain.text', 'BMI Calculator')
    });

    describe('input valid data', () => {
        before(() => {
            cy.get('#weight').type('85')
            cy.get('#height').type('196')
            cy.get('#calculate').click()
        });

    it('is expected to display a BMI value', () => {
        cy.get('#results').should('contain.text', 'Your BMI value is: 22.13 and you are within normal parameters.')
    });
  });
});