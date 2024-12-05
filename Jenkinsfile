pipeline {
    agent any
    environment {
        NVM_DIR = '/var/jenkins_home/.nvm'
    }
    stages {
        stage('Install Node') {
            steps {
                script {
                    // 安装和使用指定的 Node 版本
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm install 20.18.1
                        node -v
                        nvm use 20.18.1
                    '''
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // 安装 pnpm 和项目依赖
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm use 20.18.1
                        node -v
                        npm install -g pnpm
                        pnpm install
                    '''
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // 运行构建命令
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm use 20.18.1
                        pnpm run build
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // 运行测试命令
                    sh '''
                        . $NVM_DIR/nvm.sh
                        nvm use 20.18.1
                        pnpm run test
                    '''
                }
            }
        }
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
