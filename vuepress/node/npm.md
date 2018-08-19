# NPM
или Node Package Manager

#### Содержание 
* Init package.json`
* Install all packages from `packages.json`
* Install package
* Install package into dependencies section
* Install package into dev section (`-D` or `--dev`)
* Remove package

--- 

## Init `package.json`
```
npm init
```                        
               
## Install all packages from `packages.json`
> (если проект стоит без пакетов и есть записи зависимостей в Package.json - то, оно установить все пакеты которые указаны там)

```
npm install 
npm i
```                
            
## Install package
```
npm install namePackage
npm i namePackage

```        
      
## Install package into dependencies section (`-S` or `--save`)
> (зачем? для того чтобы следить и знать какие пакеты установены в проекте)

```
npm install namePackage --save
```      

## Install package into dev section (`-D` or `--dev`)
```
npm install namePackage -D
```    
        
## Remove package
```
npm uninstall namePackage
npm rm namePackage
```
