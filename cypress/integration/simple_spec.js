describe('Adding Books', function () {
  it('Adds Book', function () {
    cy.visit('localhost:4200');

    cy.contains('New Book').click();
    cy.get('#book_title')
      .should('be.empty')
      .type('book name or something')
      .should('have.value', 'book name or something');
    cy.get('#book_author')
      .type('author name or something')
      .should('have.value', 'author name or something');
    cy.get('#book_date')
      .type('1992-12-31')
      .should('have.value', '1992-12-31');
    cy.contains('Submit').click();

    cy.contains('Author - Author Name Or Something');
    cy.contains('Title - Book Name Or Something');
    cy.contains('Publish Date - 1992-12-31');


  })

  it('edits the book', function () {
    cy.get(':nth-child(1)>.book')
      .contains('Edit')
      .click();
    cy.get('#book_title')
      .type('{selectall}new book name')
      .should('have.value', 'new book name');
    cy.contains('Submit').click();
    cy.get(':nth-child(1)>.book')
      .should('contain', 'Title - New Book Name');
  })

  it('should delete the book', function () {
    cy.get(':nth-child(1) > .book > .button-group > .red').click();
    cy.get('.remove-btn').click();

    cy.get(':nth-child(1) > .book')
      .should('not.contain', 'Author - Author Name Or Something');
  })
});

