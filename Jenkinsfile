pipeline {
    agent any
    environment {
        NVM_DIR = '/var/jenkins_home/.nvm'
    }
    stages {
        stage('Install Node') {
            steps {
                script {
                    // 确保 nvm 被正确加载并安装所需的 node 版本
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm install 20.18.1
                        nvm use 20.18.1
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                // 运行测试
                script {
                    // 确保使用正确的 node 版本进行测试
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm use 20.18.1
                        npm test
                    '''
                }
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
