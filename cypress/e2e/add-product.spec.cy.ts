describe('Add Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display add product button', () => {
    cy.get('[data-cy="add-button"]').should('be.visible');
  });

  it('should check if when click on the button it takes to the add product route', () => {
    cy.get('[data-cy="add-button"]').click();
    cy.url().should('eq', 'http://localhost:4200/add-product');
  });

  it('should display back button', () => {
    cy.visit('http://localhost:4200/add-product');
    cy.get('[data-cy="add-edit-back-button"]').should('be.visible');
    cy.get('[data-cy="add-edit-back-button"]').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });

  it('should display the form', () => {
    cy.visit('http://localhost:4200/add-product');
    cy.get('[data-cy="add-edit-form"]').should('be.visible');
    cy.get('mat-form-field').should('have.length', 5);
  });

  it('should show an error message for required fields', () => {
    cy.visit('http://localhost:4200/add-product');
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
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Categoria do produto é obrigatória'
    );
  });

  it('should show an error message for invalid fields', () => {
    cy.visit('http://localhost:4200/add-product');
    cy.get('input[formControlName="name"]').type('a');
    cy.get('input[formControlName="description"]').type('abc');
    cy.get('input[formControlName="price"]').type('ab');
    cy.get('input[formControlName="quantity"]').type('-5');
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
    cy.get('[data-cy="add-edit-text-warn"]').should(
      'contain',
      'Categoria do produto é obrigatória'
    );
  });

  it('should add product when the form is valid', () => {
    cy.visit('http://localhost:4200/add-product');
    cy.get('input[formControlName="name"]').type('Produto Teste');
    cy.get('input[formControlName="description"]').type(
      'Descrição do Produto Teste'
    );
    cy.get('input[formControlName="price"]').type('100');
    cy.get('input[formControlName="quantity"]').type('10');
    cy.get('mat-select[formControlName="category"]')
      .click()
      .get('mat-option')
      .contains('Móveis')
      .click();
    cy.get('[data-cy="add-edit-save-button"]').click();
    cy.get('simple-snack-bar')
      .should('be.visible')
      .and('contain.text', 'Produto adicionado com sucesso!');
  });

  it('should check if the test product was added', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[data-cy="list-product-title"]')
      .last()
      .and('contain.text', 'Produto Teste');
    cy.get('[data-cy="list-product-description"]')
      .last()
      .and('contain.text', 'Descrição do Produto Teste');
    cy.get('[data-cy="list-product-price"]').last().and('contain.text', '100');
    cy.get('[data-cy="list-product-quantity"]')
      .last()
      .and('contain.text', '10');
  });
});
