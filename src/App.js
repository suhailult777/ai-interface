import React from 'react';
import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="Chatbox">
        <div className="chat-log">
          {/* ... (chat messages remain unchanged) ... */}
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">

              </div>
              <div className="message">
                Hello World!
              </div>
            </div>
          </div>
          <div className="chat-message ChatBot">
            <div className="chat-message-center">
              <div className="avatar ChatBot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8 7c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm0 5.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM22.5 9H22V7.5C22 5.019 19.981 3 17.5 3h-5V.5a.5.5 0 0 0-1 0V3h-5A4.505 4.505 0 0 0 2 7.5V9h-.5C.673 9 0 9.673 0 10.5v4c0 .827.673 1.5 1.5 1.5H2v.5C2 18.981 4.019 21 6.5 21h11c2.481 0 4.5-2.019 4.5-4.5V16h.5c.827 0 1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5ZM2 15h-.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H2v5Zm19 1.5c0 1.93-1.57 3.5-3.5 3.5h-11C4.57 20 3 18.43 3 16.5v-9C3 5.57 4.57 4 6.5 4h11C19.43 4 21 5.57 21 7.5v9Zm2-2c0 .275-.225.5-.5.5H22v-5h.5c.275 0 .5.225.5.5v4Zm-4 1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5Zm-5 0a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5ZM18 9c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2Zm-3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  />
                </svg>


              </div>
              <div className="message">
                I am an AI
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <div className="input-wrapper">
            <button className="clip-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M22.95 9.6a1 1 0 0 0-1.414 0L10.644 20.539a5 5 0 1 1-7.072-7.071L14.121 2.876a3 3 0 0 1 4.243 4.242L7.815 17.71a1.022 1.022 0 0 1-1.414 0 1 1 0 0 1 0-1.414l9.392-9.435a1 1 0 0 0-1.414-1.414l-9.392 9.435a3 3 0 0 0 0 4.243 3.073 3.073 0 0 0 4.243 0L19.778 8.532a5 5 0 0 0-7.071-7.07L2.158 12.054a7 7 0 0 0 9.9 9.9L22.95 11.018a1 1 0 0 0 0-1.418Z" />
              </svg>
            </button>
            <textarea rows="1" className="chat-input-textarea" placeholder="Type your message here..."></textarea>
            <button className="send-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="m17.71 9.88-4.3-4.29a2 2 0 0 0-2.82 0l-4.3 4.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L11 8v11a1 1 0 0 0 2 0V8l3.29 3.29a1 1 0 1 0 1.42-1.41Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;