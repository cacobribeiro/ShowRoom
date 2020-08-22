import React from 'react';

function WelcomePop() {
  return (
    <div>
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="toast"
        data-autohide="false"
      >
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
}

export default WelcomePop;
