describe('Delete Componente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display delete button', () => {
    cy.get('[data-cy="delete-button"]').should('be.visible');
  });

  it('should display dialog after click delete button', () => {
    cy.get('[data-cy="delete-button"]').first().click();
    cy.get('[data-cy="delete-title"]').should('be.visible');
    cy.get('[data-cy="delete-message"]').should('be.visible');
    cy.get('[data-cy="delete-button-no"]').should('be.visible');
    cy.get('[data-cy="delete-button-yes"]').should('be.visible');
  });

  it('should close the dialog after clicking no', () => {
    cy.get('[data-cy="delete-button"]').first().click();
    cy.get('[data-cy="delete-button-no"]').click();
    cy.get('[data-cy="delete-title"]').should('not.be.visible');
    cy.get('[data-cy="delete-message"]').should('not.be.visible');
    cy.get('[data-cy="delete-button-no"]').should('not.be.visible');
    cy.get('[data-cy="delete-button-yes"]').should('not.be.visible');
  });

  it('should delete the product after clicking yes', () => {
    cy.get('[data-cy="delete-button"]').first().click();
    cy.get('[data-cy="delete-button-yes"]').click();
    cy.get('simple-snack-bar')
      .should('be.visible')
      .and('contain.text', 'Produto removido com sucesso!');
  });
});
