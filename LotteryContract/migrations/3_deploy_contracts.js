var MetaCoin = artifacts.require('MetaCoin');

module.exports = function(deployer) {
    deployer.deploy(MetaCoin);
    // Additional contracts can be deployed here
};