describe('User test', () => {
  it('User is not loggin on start', () => {
    cy.visit('/');
    cy.contains('Proszę się zalogować');
  })

  it('User can login', () => {
    cy.visit('/');
    cy.get('button').contains('Zaloguj');
    cy.get('button').click();
    cy.contains('Mateusz');
  })
})
