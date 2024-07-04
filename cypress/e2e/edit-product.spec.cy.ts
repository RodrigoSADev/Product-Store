describe('Edit Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display edit button', () => {
    cy.get('[data-cy="edit-button"]').should('be.visible');
  });

  it('should check if when click on the button it takes to the edit product route', () => {
    cy.get('[data-cy="edit-button"]').first().click();
    cy.url().should('eq', 'http://localhost:4200/edit-product/1');
  });

  it('should display back button', () => {
    cy.visit('http://localhost:4200/edit-product/1');
    cy.get('[data-cy="add-edit-back-button"]').should('be.visible');
    cy.get('[data-cy="add-edit-back-button"]').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });

  it('should display the form', () => {
    cy.visit('http://localhost:4200/edit-product/1');
    cy.get('[data-cy="add-edit-form"]').should('exist');
    cy.get('mat-form-field').should('have.length', 5);
  });

  it('should show an error message for required fields', () => {
    cy.visit('http://localhost:4200/edit-product/1');
    cy.get('input[formControlName="name"]').clear();
    cy.get('input[formControlName="description"]').clear();
    cy.get('input[formControlName="price"]').clear();
    cy.get('input[formControlName="quantity"]').clear();
    cy.get('[data-cy="add-edit-save-button"]').click();
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Nome do produto é obrigatório'
    );
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Descrição do produto é obrigatória'
    );
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Valor do produto é obrigatório'
    );
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Quantidade do produto é obrigatório'
    );
  });

  it('should show an error message for invalid fields', () => {
    cy.visit('http://localhost:4200/edit-product/1');
    cy.get('input[formControlName="name"]').clear().type('a');
    cy.get('input[formControlName="description"]').clear().type('abc');
    cy.get('input[formControlName="price"]').clear().type('ab');
    cy.get('input[formControlName="quantity"]').clear().type('-5');
    cy.get('[data-cy="add-edit-save-button"]').click();
    cy.get('[data-cy="add-edit-text-warn"]').should('contain', 'Nome Inválido');
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Descrição Inválida'
    );
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Valor Inválido'
    );
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Quantidade Inválida'
    );
  });

  it('should edit product when the form is valid', () => {
    cy.visit('http://localhost:4200/edit-product/1');
    cy.get('input[formControlName="name"]').clear().type('Produto Teste');
    cy.get('input[formControlName="description"]')
      .clear()
      .type('Descrição do Produto Teste');
    cy.get('input[formControlName="price"]').clear().type('100');
    cy.get('input[formControlName="quantity"]').clear().type('10');
    cy.get('mat-select[formControlName="category"]')
      .click()
      .get('mat-option')
      .contains('Móveis')
      .click();
    cy.get('[data-cy="add-edit-save-button"]').click();
    cy.get('simple-snack-bar')
      .should('be.visible')
      .and('contain.text', 'Produto alterado com sucesso!');
  });

  it('should check if the test product was edited', () => {
    cy.get('[data-cy="list-product-title"]')
      .first()
      .and('contain.text', 'Produto Teste');
    cy.get('[data-cy="list-product-description"]')
      .first()
      .and('contain.text', 'Descrição do Produto Teste');
    cy.get('[data-cy="list-product-price"]').first().and('contain.text', '100');
    cy.get('[data-cy="list-product-quantity"]')
      .first()
      .and('contain.text', '10');
  });
});
