describe('List Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display mat-card', () => {
    cy.get('[data-cy="list-mat-card"]').should('be.visible');
  });

  it('should display the list title', () => {
    cy.get('[data-cy="list-title"]')
      .should('be.visible')
      .and('contain.text', 'Lista de Produtos');
  });

  it('should display the product title', () => {
    cy.get('[data-cy="list-product-title"]').should('be.visible');
  });

  it('should display the product price', () => {
    cy.get('[data-cy="list-product-price"]').should('be.visible');
  });

  it('should display the product description', () => {
    cy.get('[data-cy="list-product-description"]').should('be.visible');
  });

  it('should display the product quantity', () => {
    cy.get('[data-cy="list-product-quantity"]').should('be.visible');
  });
});
