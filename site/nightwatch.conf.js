module.exports = {
	"src_folders": ['./test/testUI'],
	"output_folder": "./test/nightwatch-reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": "./selenium-server-standalone-2.48.2.jar",
		"log_path": false,
		"host": "127.0.0.1",
		"port": 6666,
		"cli_args": {
			"webdriver.chrome.driver": "./chromedriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": require('./config').url,
			"selenium_port": 6666,
			"selenium_host": "localhost",
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome",
				"javascriptEnabled": true,
				"acceptSslCerts": true
			}
		},

		"firefox": {
			"desiredCapabilities": {
				"browserName": "firefox",
				"javascriptEnabled": true,
				"acceptSslCerts": true
			}
		}
	}
}
