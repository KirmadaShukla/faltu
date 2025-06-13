import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const itemsFromBackend = [
  { id: '1', content: 'First task' },
  { id: '2', content: 'Second task' },
  { id: '3', content: 'Third task' },
  { id: '4', content: 'Fourth task' },
  { id: '5', content: 'Fifth task' },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;

  const reorderedItems = reorder(
    itemsFromBackend,
    result.source.index,
    result.destination.index
  );

  setColumns({...columns, items: reorderedItems});
};


function App() {
  const [columns, setColumns] = React.useState({items: itemsFromBackend});

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          <Droppable droppableId="items">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="bg-white rounded-lg shadow-md p-4"
              >
                {columns.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-gray-200 rounded-lg p-2 mb-2 flex items-center"
                      >
                        <div className="flex-grow">{item.content}</div>
                        <div className="drag-handle">⋮⋮</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 mt-4">
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
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
            </svg>
            About
            <div className="drag-handle">⋮⋮</div>
          </a>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;