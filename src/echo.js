import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: '48024973ddf54017d732', // Ganti dengan kunci Pusher Anda dalam tanda kutip
    cluster: '2d790dabffe6c3f0f7ab', // Ganti dengan cluster Pusher Anda dalam tanda kutip
    forceTLS: true,
});


export default echo;