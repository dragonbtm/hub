/*jslint node: true */
"use strict";

exports.clientName = 'hub';
exports.minClientVersion = '2.7.2';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

// iOS Push Notifications APNS config
exports.APNsAuthKey = ''; // *.p8 filepath or buffer with key itself
exports.keyId = '';
exports.teamId = '';

exports.port = 8286;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
//exports.bug_sink_email = 'admin@example.org';
//exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.WS_PROTOCOL = 'ws://';

exports.storage = 'mysql';

exports.database = {
	host:"localhost",
	name:"hub",
	user:"root",
	password:"root"
}


exports.initial_witnesses = !process.env.testnet ? [
		'WXNM4L4OTGIKSQHMMMBE6TUW6YJ4SHGY',
		'J4LFUWCFCXLWNNCLGMVGQKXUOUULNPDW',
		'DLVXBKXVNSOLGSXVAJBUYQUG5OEGWTV5'
]
: [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];

exports.initial_peers = [
//	process.env.testnet ? 'wss://hub1.xxx.com/bb-test' : 'wss://hub1.xxx.com/bb'
];

exports.trustedRegistries = {
	// 'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S': 'market'
};

console.log('finished hub conf');
