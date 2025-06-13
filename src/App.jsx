import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const itemsFromBackend = [
  { id: '1', content: 'First task' },
  { id: '2', content: 'Second task' },
  { id: '3', content: 'Third task' },
  { id: '4', content: 'Fourth task' },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 16,
  margin: `0 0 8px 0`,
  // change background color if dragging
  background: isDragging ? 'lightgreen' : 'grey',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const App = () => {
  const [items, setItems] = React.useState(itemsFromBackend);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(items, result.source.index, result.destination.index);
    setItems(reorderedItems);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="mr-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
        </svg>
        Contact
        <div className="drag-handle">⋮⋮</div>
      </a>
    </div>
  );
};

export default App;