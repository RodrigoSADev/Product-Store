describe('Product Service API', () => {
  const API = 'https://product-store-api-sigma.vercel.app';

  it('should check if the GET request is working', () => {
    cy.request({
      method: 'GET',
      url: `${API}/products`,
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.be.an('array');
    });
  });

  it('should check if the GET BY ID request is working', () => {
    const propertys = [
      'id',
      'name',
      'description',
      'price',
      'quantity',
      'category',
    ];
    cy.request({
      method: 'GET',
      url: `${API}/products/1`,
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      propertys.forEach((property) => {
        expect(response.body).to.have.property(property);
      });
    });
  });

  it('should check if the POST request is working', () => {
    cy.request({
      method: 'POST',
      url: `${API}/products`,
      body: {
        name: 'Produto Teste',
        description: 'Descrição do Produto de Teste',
        price: 100,
        quantity: 10,
        category: 'Eletrônicos',
      },
    }).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body).is.not.empty;
    });
  });

  it('should check if the PUT request is working', () => {
    const propertys = [
      'id',
      'name',
      'description',
      'price',
      'quantity',
      'category',
    ];
    cy.request({
      method: 'PUT',
      url: `${API}/products/1`,
      body: {
        name: 'Produto Teste',
        description: 'Descrição do Produto de Teste',
        price: 100,
        quantity: 10,
        category: 'Eletrônicos',
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      propertys.forEach((property) => {
        expect(response.body).to.have.property(property);
      });
    });
  });

  it('should check if the DELETE request is working', () => {
    cy.request({
      method: 'DELETE',
      url: `${API}/products/17`,
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.empty;
    });
  });

  it('should check if the GET BY CATEGORY request is working', () => {
    const category = 'Eletrônicos';
    cy.request({
      method: 'GET',
      url: `${API}/products?category=${category}`,
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.be.an('array');
    });
  });
});
