<h1>Carga de dados de documentos CVE no MongoDB</h1>

<h2> Requisitos para configurar o ambiente: </h2>
<ul>
    <li> docker </li>
    <li> docker-compose </li>
    <li> nodeJS versão 18 </li>
</ul>

<h2> Configurando ambiente </h2>

<p> 1 - Execute o seguinte comando na raiz do projeto </p>
<blockquote>docker compose up</blockquote>

<p> 2 - Baixe os documento CVE no <a href='https://www.cve.org/Downloads'> site ofical </a> </p>
<p> 3 - Copie a pasta <strong>cves</strong> para a raiz do projeto </p>
<p> 4 - Crie na raiz do projeto um arquivo .env e adicioane dentro dele o seguinte conteúdo: </p>
<blockquote> DB_DIRECTORY=adicione aqui o caminho respectivo da pasta <strong>cves</strong></blockquote>
<blockquote>HOST=adicione aqui o host do seu servidor</blockquote>
<p> Exemplo: </p>
<blockquote>DB_DIRECTORY=/home/otavio/Documentos/DataLoadCVE/cves/</blockquote>
<blockquote>HOST=127.0.1.1</blockquote>
<p> 5 - Execute o seguinte comando para instalar os pacotes: </p>
<blockquote> npm install </blockquote>
<p> 6 - Inicie o servidor: </p>
<blockquote> npm start </blockquote>

<h2> Atenção </h2>
<p> Realize a carga de dados descrita acima antes de tentar realizar as outras operações disponíveis na aplicação. </p>

<h2> Rotas disponíveis para testar a aplicação </h2>
<ul>
    <li> <strong>localhost:3333/cve?cveId={informe aqui um cve_id}</strong> </li> Retorna o documento CVE respectivo ao cve_id passado caso exista;
    <li> <strong>localhost:3333/dataload</strong> </li> Realiza uma carga de dados com os documentos presentes na pasta <strong>cves</strong>;
    <li> <strong>localhost:3333/update/data</strong> </li> Realiza atualização dos novos arquivos cves adiconados ao projeto.
</ul>

