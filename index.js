const genId1 = require('pdjs_xid');
const genId2 = require('ptdz_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|mWGqJ9Af4n|' + genId2()).digest('base64');
}


module.exports = generateKey;
