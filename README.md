# Anotações Typescript:

Passo a passo:
- ```npm install typescript``` ou ```npm install typescript -g```
- ```npx tsc --init```

Se quiser mudar a pasta de destino do arquivo transpilado:
- Abra tsconfig.json e procure por outDir
- Em outDir mude o caminho para ./dist
- Para o arquivo seja transpilado na pasta dist digite no terminal ```npx tsc```
- Se digitar ```npx tsc 'node o arqivo .ts'``` o arquivo será transpilado dentro da pasta atual, no entanto sem a criação da pasta dist
- Digite ```npx tsc --watch``` para que o node fique escutando a cada alteração nos arquivos .ts 
