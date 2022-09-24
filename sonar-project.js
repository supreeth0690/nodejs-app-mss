const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: ' http://65.0.30.164:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    //'sonar.login': '58fa87693d9bb20b40f6ed0286bcb793b739d32d',
	    'sonar.login': 'supreethprabhu',
	    'sonar.password': '#Supreeth06',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
