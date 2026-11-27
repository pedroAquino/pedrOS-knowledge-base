import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { sendMessage } from '../api.ts';

const rl = createInterface({
    input: stdin,
    output: stdout
});

const messages: string[] = [];

const chatTurn = async () => {

    let message = '';
    
    if (messages.length === 0) {
        message = await rl.question('Say anything that comes to your mind \n');
    } else {
        message = await rl.question('> ');
    }

    messages.push(message);
    const response = await sendMessage(messages);
    console.log('CLAUDE: ', response);
    messages.push(response || '');

}

while(true) {
   await chatTurn();
}
