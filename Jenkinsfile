pipeline {
    agent any
    stages {
        stage('Install Node') {
            steps {
                script {
                    // Set NVM_DIR environment variable
                    env.NVM_DIR = '/var/jenkins_home/.nvm'
                    // Source nvm.sh into the shell
                    sh "source ${env.NVM_DIR}/nvm.sh"
                    // Use the desired version of Node
                    sh "nvm install 20.18.1"
                    sh "nvm use 20.18.1"
                }
            }
        }
        stage('Test') {
            steps {
                // 运行测试
                sh 'npm test'
            }
        }
        // 可以根据需要添加更多的阶段
    }
    post {
        success {
            // 构建成功后的操作
            echo 'Build succeeded.'
        }
        failure {
            // 构建失败后的操作
            echo 'Build failed.'
        }
    }
}