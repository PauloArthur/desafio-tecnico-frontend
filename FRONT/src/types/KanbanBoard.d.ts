type ListType = 'ToDo' | 'Doing' | 'Done';

interface List {
  name: ListType;
  cards: Card[];
}

interface Card {
  id: string;
  lista: ListType;
  titulo: string;
  conteudo: string;
}
