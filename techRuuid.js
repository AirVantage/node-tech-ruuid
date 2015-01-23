var uuid = require("node-uuid");
var _ = require("underscore");
var assert = require("assert");

var PREFIX = "avop-ruuid-";

function isRuuid(ruuid) {
    return _.isString(ruuid) && (ruuid.indexOf(PREFIX) === 0);
}

module.exports = {
    create: function() {
        return PREFIX + uuid.v4();
    },
    isRuuid: isRuuid,
    check: function(ruuid) {
        var res = isRuuid(ruuid);
        if (!res) {
            console.error("Expecting ruuid, found " + JSON.stringify( ruuid));
            console.trace();
        }
        assert.ok(res, "Expecting ruuid, found " + JSON.stringify(ruuid));
    }
};
