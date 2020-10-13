import * as sapper from "sapper/server";

module.exports = sapper;

if (require.main === module) {
	process.env.APP_DEV_BUILD = "1";
	require("../../../../run.js");
}