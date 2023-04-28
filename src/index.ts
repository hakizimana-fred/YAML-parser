import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { execSync } from 'child_process'

const readYaml = () => {
    try {
        const filePath = path.join(__dirname, 'sample.yml')
        const content = fs.readFileSync(filePath, 'utf-8')
        const yamlData = yaml.load(content)

        return yamlData
    }catch(e) {
        throw new Error(e.message)
    }
}

const executeYamlCommands = () => {
    try {
        const { commands }: any   = readYaml()
        for (const command of commands ) {
            console.log(`Execution started: ${command}`)
            execSync(command, {stdio: 'inherit'})  
        }
    }catch(e) {
        throw new Error(e.message)
    }
}

executeYamlCommands()

