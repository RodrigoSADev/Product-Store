describe('Header Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should render header', () => {
    cy.get('[data-cy="header"]').should('be.visible');
    cy.get('[data-cy="header-mat-toolbar"]').should('be.visible');
    cy.get('[data-cy="header-title"]')
      .should('be.visible')
      .and('contain.text', 'Gerenciador de Produtos');
  });
});
