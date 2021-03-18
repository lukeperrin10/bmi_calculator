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
            cy.get('input[name=weight]').type(85)
            cy.get('input[name=height]').type(196)
            cy.get('button').click


        });

    it('is expected to return a BMI value', () => {
        cy.get('#results').should('contain.text, your BMI is 22.80')
    });
  });
});