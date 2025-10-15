# 🚀 GUIA DE INSTALAÇÃO - Passo a Passo

## 1️⃣ Baixar o Projeto

Você já tem este arquivo, então o projeto já está na sua máquina!

## 2️⃣ Abrir o Terminal/PowerShell

1. Pressione `Windows + R`
2. Digite `powershell` e pressione Enter
3. Ou procure por "PowerShell" no menu iniciar

## 3️⃣ Navegar até a Pasta do Projeto

No PowerShell, navegue até onde você salvou o projeto. Exemplo:

```powershell
cd C:\Users\SeuUsuario\Downloads\colegio-magia-divina
```

(Substitua pelo caminho correto onde você salvou)

## 4️⃣ Instalar as Dependências

Dentro da pasta do projeto, execute:

```powershell
npm install
```

**Aguarde:** Esse processo pode levar de 2 a 5 minutos. Muitos arquivos serão baixados.

## 5️⃣ Iniciar o Servidor de Desenvolvimento

Após a instalação terminar, execute:

```powershell
npm run dev
```

Você verá algo como:
```
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

## 6️⃣ Ver o Site Funcionando

1. Abra seu navegador (Chrome, Edge, Firefox, etc.)
2. Acesse: `http://localhost:3000`
3. 🎉 **Pronto!** O site está rodando!

## 7️⃣ Fazer Alterações

- Para **parar o servidor**: Pressione `Ctrl + C` no PowerShell
- Para **reiniciar**: Execute `npm run dev` novamente
- O site atualiza automaticamente quando você salva arquivos

## 📝 Abrir o Projeto no VS Code

1. Abra o VS Code
2. Clique em "File" → "Open Folder"
3. Selecione a pasta `colegio-magia-divina`
4. Pronto! Agora você pode ver e editar todos os arquivos

## 🆘 Problemas Comuns

### "npm não é reconhecido"
- Reinstale o Node.js
- Reinicie o PowerShell

### Porta 3000 ocupada
- Feche outros programas que possam estar usando a porta
- Ou o Next.js vai sugerir outra porta automaticamente

### Erro ao instalar dependências
- Certifique-se de estar conectado à internet
- Tente executar o PowerShell como Administrador

## 📞 Próximos Passos

Depois de ver o site funcionando localmente, vamos:
1. Criar um repositório no GitHub
2. Fazer upload do código
3. Conectar com o Vercel para publicar online

---

**Dúvidas?** Me chame no chat que te ajudo!
