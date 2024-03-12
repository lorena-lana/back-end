import fs from "fs";

import chalk from 'chalk';
import { throws } from "assert";

// console.log(chalk.blue('fala meu chapa!'));


// console.log('olá mundo');
// console.log(' A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.');
// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) ');

// console.log(chalk.blue.bgWhite.bold("SENAI"));

// console.log(chalk.blue('curso','de','node.js'));

// console.log(chalk.red('VERMELHO',chalk.underline.bgBlue('azul')));

// console.log(`CPU: ${chalk.red('90%')} 
// RAM ${chalk.red('40%')}
// DISK: ${chalk.yellow('70%')}`);    

//2)tratamento de erros, função para tratar os erros 
function trataErro(erro){
    throw new Error (chalk.red(erro.code,"não há arquivos encontrado"));
}



//1) escrever uma funtion que traga arquivos .md 

function pegarArquivos(caminhoDoArquivo){
    const encoding="utf-8";
        fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
            if(erro){
                trataErro(erro)
            }
            console.log(chalk.green(texto));
        })

}
pegarArquivos('./arquivos/texto.md');
//callback(erro,texto)

