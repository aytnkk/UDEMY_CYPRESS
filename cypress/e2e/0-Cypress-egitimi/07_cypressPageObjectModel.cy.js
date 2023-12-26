

import { Homepage } from "../../pageObjeckModel/homepage";

const homepagePom=new Homepage()

import HomepageSecond from "../../pageObjeckModel/HomepageSecond";

describe('Page Object Model Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
    homepagePom.navigate()
    homepagePom.pricingBtn()
        
    });


    
});
describe('Page object Model ikinci kullanim', () => {
    it('Page object model kullanim ornekleri', () => {
     HomepageSecond.navigate()
     HomepageSecond.pricingBttn.should('be.visible').and('contain',"Pricing")

       
});
});