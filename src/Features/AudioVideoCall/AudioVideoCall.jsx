import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './AudioVideoCall.css';
function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function AudioVideoCall() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  let myMeeting = async element => {
    // generate call Kit Token from Zegocloud website
    const appID = 246548448;
    const serverSecret = '957fedf83193d398810ed8d73d268a7d';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    //to start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url:
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
        // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      className="myCallContainer "
      ref={myMeeting}
      style={{
        width: '70vw',
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    ></div>
  );
}
