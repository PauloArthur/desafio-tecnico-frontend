
### Setup: 

Para rodá-lo, faça:

```console
> cd FRONT
> npm install
> cp .env.example .env
> npm run preview
```

### Extras: 

Temas claro e escuro são monocromáticos inicialmente, mas pode-se adicionar duas cores principais no `.env`, por exemplo:

- ![#d4ffea](https://placehold.co/15x15/d4ffea/d4ffea.png) `#d4ffea`
- ![#8f92ff](https://placehold.co/15x15/8f92ff/8f92ff.png) `#8f92ff`

```
VITE_PRIMARY='#d4ffea' 
VITE_SECONDARY='#8f92ff'
```

Os campos de conteúdo possuem um modo preview, e os markdowns de código também mudam de tema entre claro e escuro:

https://github.com/PauloArthur/desafio-tecnico-frontend/assets/20481937/2328d525-8e46-4e43-a1c2-67e2229790f1

PS: Tomei a liberdade de me referir a `Card` por `Task` nos arquivos por preferência pessoal.
