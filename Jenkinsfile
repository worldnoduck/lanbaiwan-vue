pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // 检出代码
                checkout scm
                // 构建代码
               
                sh 'node -v'
                sh 'npm install'
                sh 'npm run build'
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