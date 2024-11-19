import React, { useRef, useState } from 'react'
import SimplePeer from 'simple-peer';

const VideoCall = () => {
    const [peer, setPeer] = useState(null);
    const userVideo = useRef();
    const peerVideo = useRef();

    const startCall = (stream) => {
        const peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on('signal', (data) => {
            console.log('Signal data:', data);
        });

        peer.on('stream', (remoteStream) => {
            peerVideo.current.srcObject = remoteStream;
        });

        setPeer(peer);
    };

    const handleVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        userVideo.current.srcObject = stream;
        startCall(stream);
    };

  return (
    <div>
        <h2>Virtual Classroom -  Video Call</h2>
        <video ref={userVideo} autoPlay muted style={{ width: '45%' }} />
        <video ref={peerVideo} autoPlay style={{ width: '45%' }} />
        <button onClick={handleVideo}>Start Call</button>
    </div>
  );
};

export default VideoCall;