pipeline {
    agent any
    
    stages{
        stage("Cloning Project"){
            steps{
                echo "it is in cloning phase"
                git url: "https://github.com/jugalkishors/hello-api.git", branch:"main"
            }
        }
        
        stage("Building Image"){
            steps{
                echo "it is in building started"
                sh "docker build -t helloapi ."
            }
        }
        
        stage("Pushing to DockerHub"){
            steps{
                echo "it is in pushing to docker hub"
                
                withCredentials([usernamePassword(credentialsId:"dockerHubCred", passwordVariable:"dockerPass", usernameVariable:"dockerUser")]){
                    sh "docker login -u ${env.dockerUser} -p ${env.dockerPass}"
                    sh "docker tag helloapi jksuthar21/helloapi:latest"
                    sh "docker push jksuthar21/helloapi:latest"
                }
            }
        }
        
        stage("Deployment"){
            steps{
                echo "Deploying"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
