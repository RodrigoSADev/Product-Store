describe('Filter Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display the filter', () => {
    cy.get('[data-cy="filter-mat-form"]').should('be.visible');
    cy.get('mat-label').contains('Filtrar por Categoria');
    cy.get('[data-cy="filter-mat-select"]').should('be.visible').click();
    cy.get('mat-option').should('have.length', 6);
  });

  it('should select a category and show the filtered items', () => {
    cy.get('[data-cy="filter-mat-select"]').click();
    cy.get('mat-option').contains('Eletrônicos').click();
    cy.get('[data-cy="list-product-title"]').should(
      'have.length.greaterThan',
      1
    );
    cy.get('[data-cy="list-product-description"]').should(
      'have.length.greaterThan',
      1
    );
    cy.get('[data-cy="list-product-price"]').should(
      'have.length.greaterThan',
      1
    );
    cy.get('[data-cy="list-product-quantity"]').should(
      'have.length.greaterThan',
      1
    );
  });

  it('should reset the filter and show all products', () => {
    cy.get('[data-cy="filter-mat-select"]').click();
    cy.get('mat-option').contains('Todos os Produtos').click();
    cy.get('[data-cy="list-product-title"]').should(
      'have.length.greaterThan',
      5
    );
    cy.get('[data-cy="list-product-description"]').should(
      'have.length.greaterThan',
      5
    );
    cy.get('[data-cy="list-product-price"]').should(
      'have.length.greaterThan',
      5
    );
    cy.get('[data-cy="list-product-quantity"]').should(
      'have.length.greaterThan',
      5
    );
  });
});
