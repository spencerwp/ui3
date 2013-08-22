/*global buster, assert, refute, gts*/

buster.testCase("Project admin", {
    setUp: function () {
        this.data = {
            editPath: "/edit",
            destroyPath: "/destroy",
            ownershipPath: "/ownership",
            newRepositoryPath: "/repository"
        };
    },

    "includes link to admin pull-down": function () {
        var menu = gts.project.admin.build(this.data);

        assert.className(menu, "dropdown");
        assert.match(menu.innerHTML, "dropdown-toggle");
        assert.match(menu.innerHTML, "<i class=\"icon-cog\"></i> Admin");
    },

    "includes dropdown menu": function () {
        var menu = gts.project.admin.build(this.data);

        assert.match(menu.innerHTML, "<ul class=\"dropdown-menu");
    },

    "includes links": function () {
        var menu = gts.project.admin.build(this.data);

        assert.match(menu.innerHTML, "/edit");
        assert.match(menu.innerHTML, "/destroy");
        assert.match(menu.innerHTML, "/ownership");
        assert.match(menu.innerHTML, "/repository");
    }
});