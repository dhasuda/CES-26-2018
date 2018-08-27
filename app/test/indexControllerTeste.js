var should = require('should')
const controller = require('../controllers/rootController')

var request = {}
var response = {
    viewName: ""
    , data : {}
    , render: function(view, viewData) {
        this.viewName = view
        this.data = viewData
    }
}

describe("Root controlling", function(){
    describe("First page", function(){
        it("should provide the the login.ejs view", function(){
        controller.firstPage(request, response)
        response.viewName.should.equal("login.ejs")
        })
    })
    
    describe("Register page", function(){
        it("should provide the the register.ejs view", function(){
        controller.registerPage(request, response)
        response.viewName.should.equal("register.ejs")
        })
    })

    describe("Welcome page", function(){
        it("should provide the the welcome string", function(){
        controller.renderWelcomePage(request, response)
        console.log('RESPONSE', response.viewName)
        response.viewName.should.equal("welcome.ejs")
        })
    })
})