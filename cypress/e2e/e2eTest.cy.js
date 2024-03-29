describe(' API Automation In Cypress', () => {



    it(' Using Custom Commands', () => {


        let payload = {
            "name": "Janet",
            "email": "Janet@hackmail.com",
            "gender": "female",
            "status": "active"
        }


        cy.postAPI(payload).then((response) => {
            expect(response.status).to.be.equal(201)
            let userId = response.body.id
            cy.getAPI(userId).then((response) => {
                expect(response.status).to.be.equal(200)
            })
            cy.putAPI(userId).then((response) => {
                expect(response.status).to.be.equal(200)
            })
            cy.deleteAPI(userId).then((response) => {
                expect(response.status).to.be.equal(204)
            })



        })
    })



})