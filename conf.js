/*jslint node: true */
"use strict";

exports.clientName = 'hub';
//exports.minClientVersion = '2.2.0';

// https://console.developers.google.com
//exports.pushApiProjectNumber = 0;
//exports.pushApiKey = '';

//exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
//exports.bServeAsHub = true;
//exports.bSaveJointJson = true;
//exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
//exports.bug_sink_email = 'admin@example.org';
//exports.bugs_from_email = 'bugs@example.org';

//exports.HEARTBEAT_TIMEOUT = 300*1000;

//数据库
exports.storage = 'sqlite';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'wss://';
exports.KEYS_FILENAME = 'keys.json';

exports.bLight = false;

exports.port = 8286;
exports.bServeAsHub = true;

exports.initial_witnesses = [
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S',
	'QLKAIB33R7AVHABYC5PGER2LLIVH5YE2',
	'IOOOMPPD6FRHTNQBK763EAFUCIRJZYMP',
	'HVDDB5NBWCY4Y2I3ZO673OJO5QD2EPON',
	'4BDRTRHHW4L3EKNCTVYXTKMXDFHQFYTE',
	'3OVSZG2MSJTNPROZXG3QV7DUFYZCR7KV'
];


exports.admin_email='zz634682577@163.com';
exports.from_email='wenzhengzhang@chenhaninfo.com';
exports.smtpTransport ="relay";
exports.smtpUser='wenzhengzhang@chenhaninfo.com';
exports.smtpPassword='Aa123123';
exports.smtpRelay='smtp.mxhichina.com';
exports.smtpPort='25';



exports.initial_peers = [
	// 'wss://hub1.xxx.com/bb',
	// 'wss://hub2.xxx.com/bb',
	// 'wss://hub3.xxx.com/bb',
	// 'wss://hub4.xxx.com/bb'
];

exports.trustedRegistries = {
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S': 'market'
};

console.log('finished hub conf');
