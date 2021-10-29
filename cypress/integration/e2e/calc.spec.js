describe("Transfers test", () => {
  beforeEach(() => {
    cy.visit("https://romanca.github.io/calculator/");
    cy.viewport("macbook-15");
  });

  it("Calculation", () => {
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(1)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(3)").click();

    cy.get(":nth-child(3) > :nth-child(1)").click();
    cy.get(":nth-child(3) > :nth-child(2)").click();
    cy.get(":nth-child(3) > :nth-child(3)").click();

    cy.get(".sc-pGacB > :nth-child(1)").click();
    cy.get(".sc-pGacB > :nth-child(2)").click();
    cy.get(".sc-pGacB > :nth-child(3)").click();
    cy.get(".sc-gKseQn").click();
    // cy.get(":nth-child(5) > .sc-jrAFXE").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(1)").click();

    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(1)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(3)").click();

    cy.get(":nth-child(3) > :nth-child(1)").click();
    cy.get(":nth-child(3) > :nth-child(2)").click();
    cy.get(":nth-child(3) > :nth-child(3)").click();

    cy.get(".sc-pGacB > :nth-child(1)").click();
    cy.get(".sc-pGacB > :nth-child(2)").click();
    cy.get(".sc-pGacB > :nth-child(3)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(2)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(3)").click();
    cy.get(".sc-pGacB > :nth-child(2)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(4)").click();
    cy.get(".sc-pGacB > :nth-child(3)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(":nth-child(3) > :nth-child(4)").click();
    cy.get(".sc-pGacB > :nth-child(1)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(1)").click();
    cy.get(":nth-child(5) > .sc-jrAFXE").click();
    cy.get(".sc-pGacB > :nth-child(1)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(1)").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(3)").click();
    cy.get(".sc-pGacB > :nth-child(1)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(1)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(4)").click();
    cy.get(":nth-child(3) > :nth-child(3)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(4)").click();
    cy.get(".sc-iBPTik > :nth-child(2) > :nth-child(2)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(":nth-child(3) > :nth-child(4)").click();
    cy.get(":nth-child(3) > :nth-child(3)").click();
    cy.get(".sc-jSgvzq").click();
    cy.get(".sc-iBPTik > :nth-child(1) > :nth-child(1)").click();
  });
});
