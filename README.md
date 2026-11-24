# Alma e Arte

Repositório com o front-end Angular e a API ASP.NET Core em projetos separados.

## Estrutura

```text
frontend/       Aplicação Angular
backend/        API ASP.NET Core Web API (GestaoDeCompras.Api)
docs/           Documentação do projeto
```

## Executar o front-end

```powershell
cd frontend
npm install
npm start
```

## Executar a API

```powershell
cd backend
dotnet restore
dotnet run --project AlmaeArte.Api.csproj
```

A API foi criada com controllers e inclui um controller de exemplo (`WeatherForecastController`), que pode ser substituído pelos endpoints do projeto.
