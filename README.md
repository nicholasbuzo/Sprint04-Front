# Sistema de Monitoramento CPTM

Este projeto é um sistema de monitoramento para os trens metropolitanos de São Paulo, desenvolvido para auxiliar na identificação e acompanhamento de problemas nas linhas, status dos trens e condições dos trilhos.

## 🚀 Funcionalidades

- Monitoramento em tempo real do status das linhas
- Visualização de problemas reportados
- Status dos trens em operação
- Condições dos trilhos e infraestrutura
- Interface intuitiva e responsiva

## 🛠️ Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Axios para requisições HTTP
- Heroicons para ícones
- React Hot Toast para notificações

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Acesso à API do sistema de trens

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
```

## 🚀 Executando o Projeto

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a versão de produção:

```bash
npm run start
# ou
yarn start
```

## 📝 Documentação da API

O projeto utiliza a API do sistema de trens metropolitanos para obter dados em tempo real. As principais endpoints utilizadas são:

- `/status`: Status atual das linhas
- `/trains`: Informações sobre os trens em operação
- `/issues`: Problemas reportados
- `/tracks`: Condições dos trilhos

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✒️ Autores

- Seu Nome - [seu-usuario](https://github.com/seu-usuario)

## 📞 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no repositório.