import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);

    // Fungsi untuk mengambil data pesan dari backend
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-messages`);
            setMessages(response.data); // Simpan data pesan ke state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Mengambil data saat komponen dimuat
    useEffect(() => {
        fetchData(); // Panggil fetchData saat komponen dimuat
    }, []); // Kosongkan array dependency agar hanya dipanggil sekali

    return (
        <div>
            <h2>Chat Messages</h2>
            <div>
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.user.name}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatComponent;