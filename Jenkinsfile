pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/deiderbasilio/MiniApp-Pruebas.git'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm test'
            }
        }

        stage('Iniciar Aplicación') {
            steps {
                sh 'npm start &'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente'
        }

        failure {
            echo 'El pipeline falló'
        }
    }
}
