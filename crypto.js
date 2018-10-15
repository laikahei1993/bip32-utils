var createHash = require("create-hash");

function ripemd160(buffer) {
  return createHash("rmd160")
    .update(buffer)
    .digest();
}

function sha256(buffer) {
  return createHash("sha256")
    .update(buffer)
    .digest();
}

function hash160(buffer) {
  return ripemd160(sha256(buffer));
}

module.exports = { ripemd160, sha256, hash160 };
