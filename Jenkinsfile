pipeline {
    agent any

    stages {
        stage("build")

        steps {
            echo 'building application'
            sh 'npm install'
            sh 'npm run start'
        }
    }
}