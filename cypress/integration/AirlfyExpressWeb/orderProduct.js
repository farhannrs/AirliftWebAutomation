describe('Placeing an order' ,  function () 
{
    it('GotoURL', function () {
        // GotoURL
        cy.visit('https://airliftexpress.com/')
        // Select Country Pakistan
        cy.get('div [class = "ant-form-item-control-input-content ng-tns-c92-29" ]').click()
        cy.get('nz-option-item[title= "Pakistan"]').click()

        // Select City
        cy.get('div[class= "ant-form-item-control-input-content ng-tns-c92-31"]').click()
        cy.get('nz-option-item[title= "Karachi"]').click()

        // Select current location 
        cy.get('i[class= "icon-precision get-location-btn ng-tns-c92-33"]').click()

        // Click on Continue button
        cy.get('button[class= "mw-submit-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous"]').click().wait(1000)

        // Click on the first item 
        cy.get('img[class= "pc-img"]')
        .each(($el, index, $list) => {
            if (index == 0) {
                $el.click()
            }
        })

        // Click on Add to Cart
        cy.get('button[class= "pdw-add-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block ng-star-inserted"]').click()
        // increase Quantity
        cy.get('i[class= "icon-plus"]').dblclick()
  

        // Click on My cart
        cy.get('i[class = "icon-bag bb-icon ng-star-inserted"]').click()

        // Click on Login / SingnUp button
        cy.get('button[class = "cdw-submit-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block ng-star-inserted"] ').click()

        // Enter phone number
        cy.get('nz-select-item[class = "ant-select-selection-item ng-star-inserted"]').click()

        cy.get('span[class= "ng-star-inserted"]').contains(' Pakistan (+92) ').click()
        cy.get('input[formcontrolname= "phone"]').type('3412822597')
        // Enter Password
        cy.get('input[type= "password"]').type('test12')
        // Click on Login button
        cy.get('button[class= "mw-submit-btn mt-3 ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block"]').click().wait(3000)
        // Click on Checkout button 
        cy.get('button[class= "cdw-submit-btn ant-btn ant-btn-primary ant-btn-lg ant-btn-dangerous ant-btn-block ng-star-inserted"]').click().wait(1000)
        // Click on COD
        cy.get('ecp-payment-information > .checkout-box > .cb-b-body > form.ng-untouched > .ant-radio-group > :nth-child(3) > :nth-child(2)').click()
        // Click on Place Order
        cy.get('span[class= "ng-star-inserted"]').contains(' Place Order ').click().wait(10000)
        // Click on Cancel 
        cy.get("span[class = 'ng-star-inserted']").contains(' Cancel ').click()
        // Click on Yes Cancel it
        cy.get('span[class = "ng-star-inserted"]').contains('YES, CANCEL IT').click()
    
    }) 


})


