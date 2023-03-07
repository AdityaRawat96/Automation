function getMessages() {
  const messagesList = document.querySelector('.messages-list__conversation');
  const messages = messagesList.querySelectorAll('.message');
  const result = [];

  messages.forEach((message) => {
    const messageContent = message.querySelector('.p-1')
      ? message.querySelector('.p-1').textContent
      : 'Hi';
    if (message.classList.contains('message--in')) {
      result.push({
        key: 'her',
        content: messageContent,
        element: message,
      });
    } else if (message.classList.contains('message--out')) {
      result.push({
        key: 'him',
        content: messageContent,
        element: message,
      });
    }
  });

  // Sort the results by the order of the HTML elements
  result.sort((a, b) => {
    return (
      Array.from(messages).indexOf(a.element) -
      Array.from(messages).indexOf(b.element)
    );
  });

  let combinedText = 'Continue this conversation: \n';

  result.forEach((message) => {
    const key = message.key;
    const content = message.content;
    combinedText += `${key}: ${content}\n`;
  });

  console.log(combinedText);
}
getMessages();
