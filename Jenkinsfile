pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // 检出代码
                checkout scm
                // 构建代码
                sh 'whoami'
                sh 'node -v'

                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                sh 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm'
                sh 'nvm use 20.18.1'
                sh 'node -v'
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