import { Card, AddTaskButton } from '@components/index';

import { ListContainer, Container } from './styles';

const Column = ({ name, tasks }: List): JSX.Element => {
  return (
    <Container className="group/column">
      <h2 className="px-2 py-4 text-2xl font-bold">{name}</h2>
      {name === 'ToDo' && <AddTaskButton isEmptyList={tasks.length === 0} />}
      <ListContainer>
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default Column;
