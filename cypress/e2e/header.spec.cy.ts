describe('Header Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should render header with title', () => {
    cy.get('[data-cy="header"]').should('exist');
    cy.get('[data-cy="header-mat-toolbar"]').should('exist');
    cy.get('[data-cy="header-title"]')
      .should('exist')
      .and('contain.text', 'Gerenciador de Produtos');
  });
});
