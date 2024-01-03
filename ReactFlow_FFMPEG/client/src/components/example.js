// src/components/FlowChart.js
import React, { useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

const FlowChart = () => {
  const generateInitialNodes = () => {
    const formNode = {
      id: 'form-node',
      type: 'input',
      data: {
        label: (
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" />
              </label>
            </form>
          </div>
        ),
      },
      position: { x: 0, y: 0 },
    };

    const submitNode = {
      id: 'submit-node',
      type: 'output',
      data: {
        label: (
          <div>
            <button onClick={() => handleFormSubmit()}>Submit</button>
          </div>
        ),
      },
      position: { x: 200, y: 0 },
    };

    return [formNode, submitNode];
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(generateInitialNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // You can handle the form submission logic here, e.g., send the formData to a server
    handleFormChange()
    console.log('Form Data:kkkkkkkkkkkkkkkkkkkkkkkkkkk', formData);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        elementsSelectable={false}
      />
    </div>
  );
};

export default FlowChart;
