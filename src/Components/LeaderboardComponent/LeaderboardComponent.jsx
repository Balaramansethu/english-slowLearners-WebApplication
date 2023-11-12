// Leaderboard.js

import React from 'react';

const LeaderboardComponent = ({
  moduleOneCompleted,
  moduleTwoCompleted,
  moduleThreeCompleted,
}) => {
  // Calculate the total progress based on completed modules
  const totalProgress =
    (moduleOneCompleted ? 1 : 0) * 3.3 +
    (moduleTwoCompleted ? 1 : 0) * 3.3 +
    (moduleThreeCompleted ? 1 : 0) * 3.3;

  // Dummy users for a sportive learning environment
  const users = [
    { name: '1. John Doe', progress: 45.6 },
    { name: '2. Jane Smith', progress: 32.1 },
    // Add more dummy users as needed
  ];

  return (
    <div className='leaderboard'>
      
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
          </li>
        ))}
        <li>3.Bala</li>
      </ul>
    </div>
  );
};

export default LeaderboardComponent;
