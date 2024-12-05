pipeline {
    agent any
    stages {
        stage('Install Node') {
            steps {
                script {
                   sh 'ls -l /var/jenkins_home/.nvm/nvm.sh'
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