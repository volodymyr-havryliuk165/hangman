import React, { useEffect, useRef } from 'react';
import './css/Picture.css';

export default function Picture({ errors }) {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas?.current?.getContext('2d');
    const clear = () => {
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    };
    const draw = (part) => {
      switch (part) {
        case 'gallows':
          context.strokeStyle = '#000';
          context.lineWidth = 10;
          context.beginPath();
          context.moveTo(5, 225);
          context.lineTo(175, 225);
          context.moveTo(25, 225);
          context.lineTo(25, 5);
          context.lineTo(100, 5);
          context.lineTo(100, 25);
          context.stroke();
          break;

        case 'head':
          context.lineWidth = 5;
          context.beginPath();
          context.arc(100, 50, 25, 0, Math.PI * 2, true);
          context.closePath();
          context.stroke();
          break;

        case 'body':
          context.beginPath();
          context.moveTo(100, 75);
          context.lineTo(100, 140);
          context.stroke();
          break;

        case 'rightHarm':
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(60, 100);
          context.stroke();
          break;

        case 'leftHarm':
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(140, 100);
          context.stroke();
          break;

        case 'rightLeg':
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(80, 190);
          context.stroke();
          break;

        case 'rightFoot':
          context.beginPath();
          context.moveTo(82, 190);
          context.lineTo(70, 185);
          context.stroke();
          break;

        case 'leftLeg':
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(125, 190);
          context.stroke();
          break;

        case 'leftFoot':
          context.beginPath();
          context.moveTo(122, 190);
          context.lineTo(135, 185);
          context.stroke();
          break;
        default:
          break;
      }
    };
    switch (errors) {
      case 0:
        clear();
        draw('gallows');
        break;
        case 1:
        draw('head');
        break;
      case 2:
        draw('body');
        break;
      case 3:
        draw('rightHarm');
        break;
      case 4:
        draw('leftHarm');
        break;
      case 5:
        draw('rightLeg');
        break;
      case 6:
        draw('leftLeg');
        break;
      default:
        break;
    }
  }, [errors]);
  return (
    <div className="picture">
      <canvas ref={canvas} width="300" height="300"></canvas>
    </div>
  );
}
