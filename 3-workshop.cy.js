
describe('financas', () =>{

    it('cadastrar uma nova entrada' , () =>{
        cy.visit('https://devfinance-agilizei.netlify.app/')

        cy.contains('Nova Transação').click()
        cy.get('#description').type('mercadinho')
        cy.get('#amount').type('12.50')
        cy.get('#date').type('2024-09-02')
        cy.get('button').click()

        cy.contains('Nova Transação').click()
        cy.get('#description').type('mercadinho2')
        cy.get('#amount').type('12.50')
        cy.get('#date').type('2024-09-02')
        cy.get('button').click()

        //should
        cy.get('table tbody tr').should('have.length',2)
    })



    
});