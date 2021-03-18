// userCanCheckTheirBmi.feature.js 



describe('User can check their BMI', () => {
    it('user can enter weight and height', () => {
            cy.visit('http://localhost:3001')
            cy.contains('BMI Calculator')
            cy.get('#weight').type('85')
            cy.get('#height').type('196')
            cy.get('#Calculate').click()

        }),

    it('displays a BMI value of 22.12', () => {
        cy.get('#results').should('contain', '22.12')


    })

    it('displays a message of you are within normal parameters.', () => {
        cy.get('#results').should('contain', 'normal')
    
    })

})