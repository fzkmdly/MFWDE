const WebSocketInitiator = {
  init(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._messageHandler;
  },

  _messageHandler(message) {
    console.log(message.data);
    console.log(JSON.parse(message.data));
  },
};

export default WebSocketInitiator;
