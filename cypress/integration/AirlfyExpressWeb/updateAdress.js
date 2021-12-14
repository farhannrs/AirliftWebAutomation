describe('Add new Home Address' ,  function () 
{
    it('Goto URL', function () {
        // Goto URL
        cy.visit('https://airliftexpress.com/')
        // // cy.wait(4000)

        cy.get('div [class = "ant-form-item-control-input-content ng-tns-c92-29" ]').click()
        cy.get('nz-option-item[title= "Pakistan"]').click()

        // Select City
        cy.get('div[class= "ant-form-item-control-input-content ng-tns-c92-31"]').click()
        cy.get('nz-option-item[title= "Karachi"]').click()

        // Select current location 
        cy.get('i[class= "icon-precision get-location-btn ng-tns-c92-33"]').click()

        // Click on Continue button
        cy.get('button[class= "mw-submit-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous"]').click().wait(1000)

        // Click on Meneue
        cy.get('a[class = "uam-trigger ant-dropdown-link ant-dropdown-trigger"]').click()
        // Click on Login and Signup button
        cy.get('button[class = "login-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block"]').click()
             
        // Enter phone number
        cy.get('nz-select-item[class = "ant-select-selection-item ng-star-inserted"]').click()

        cy.get('span[class= "ng-star-inserted"]').contains(' Pakistan (+92) ').click()
        cy.get('input[formcontrolname= "phone"]').type('3412822597')
        // Enter Password
        cy.get('input[type= "password"]').type('test12')
        // Click on Login button
        cy.get('button[class= "mw-submit-btn mt-3 ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block"]').click().wait(3000)

        // // Click on Meneu
        cy.get('a[class = "uam-trigger ant-dropdown-link ant-dropdown-trigger"]').click()

        // // Click on MyProfile
        cy.get('li[class="ant-dropdown-menu-item ng-star-inserted"]').children().contains('My Profile').click()

        // // Click on MyAddress
        cy.get('a[class="asn-link"]').contains('My Addresses').click()

        // // Click on Add New Address
        cy.get('a[class="map-h-link"]').click()

        // Enter Full Address
        cy.get('input[type="text"]').type('findmyadventure')

        // Select Lalbe as
        cy.get('label[class="pill-block ant-radio-wrapper ng-star-inserted"]').contains('Office').click()

        // Click on Submit button
        cy.get('span[class="ng-star-inserted"]').contains(' Submit ').click()

    }) 
    
})
