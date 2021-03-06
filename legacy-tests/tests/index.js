exports.run = function(SPScript, ctx) {
	var isServer = !!ctx;
	var should = require("chai").should();

	describe("SPScript Global Namespace", function() {
		it("Should have a 'SPScript.createContext()' method", function() {
			SPScript.should.have.property("createContext");
			SPScript.createContext.should.be.a("function");
		});
		it("Should have a 'SPScript.utils' namespace", function() {
			SPScript.should.not.be.null;
			SPScript.should.have.property("utils");
		});
	});

	if (!isServer) {
		require("./contextTests").run(SPScript);
		ctx = SPScript.createContext();
	}
	require("./authTests").run(ctx);
	require("./webTests").run(ctx);
	require("./listTests").run(ctx);
	require("./customActionTests").run(ctx);
	if (!isServer) {
		require("./searchTests").run(ctx);
		require("./profileTests").run(ctx);
	}
	require("./utilsTests").run(SPScript.utils);
};
