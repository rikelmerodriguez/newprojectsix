describe('Agenda de Contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve adicionar um contato', () => {
      cy.get('[data-testid="add-contact"]').click();
      cy.get('[data-testid="contact-name"]').type('John Doe');
      cy.get('[data-testid="contact-email"]').type('john.doe@example.com');
      cy.get('[data-testid="contact-phone"]').type('1234567890');
      cy.get('[data-testid="save-contact"]').click();
      cy.contains('John Doe').should('exist');
    });
  
    it('Deve editar um contato', () => {
      cy.contains('John Doe').click();
      cy.get('[data-testid="contact-name"]').clear().type('Jane Doe');
      cy.get('[data-testid="save-contact"]').click();
      cy.contains('Jane Doe').should('exist');
      cy.contains('John Doe').should('not.exist');
    });
  
    it('Deve remover um contato', () => {
      cy.contains('Jane Doe').click();
      cy.get('[data-testid="delete-contact"]').click();
      cy.contains('Jane Doe').should('not.exist');
    });
  });
  