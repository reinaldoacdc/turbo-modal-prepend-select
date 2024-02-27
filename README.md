# Cenário. 

O usuário está criando um Post, e não tem a categoria desejada criada. 
Sem perder os dados preenchidos, ele abre um Modal para criar a categoria. 

### Issue 
Após cadastrar, o turbo_stream deveria dar um append com o valor criado, mas não consigo sobrepor a tag de form usada na partial. 

### Workaround
Para poder funcionar, ao select ganhar foco, o App traz a listagem atualizada.