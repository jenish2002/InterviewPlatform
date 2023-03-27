import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        Credential:true,
        transports: ['websocket'],
    };
    return io('http://localhost:3006', options);
    // return io('https://interviewplatformbackend.onrender.com', options);
};