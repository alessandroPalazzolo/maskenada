import React from 'react';

import ShareLink from './ShareLink';
import * as svgs from '../assets/svgs'; 

import './Modal.scss';

const Modal = () => {

  const eventPropagationHandler = e => {
    const shouldBubble = e.target.id == 'letEventBubble';
    if (!shouldBubble) {
      e.stopPropagation();
    }
  }

  return (
    <div className="modal__wrapper" onClick={eventPropagationHandler}>
      <header className="modal__header">
        <h3>Share this link</h3>
        <div className='header__close-modal-icon' onClick={e => e.target.id = 'letEventBubble'}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 16 16"
            data-testid="CloseButton"
            enable-background="new 0 0 24 24"
          >
            <path
              d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </header>
      <div className="modal__content-wrapper">
        <ul className="modal__list">
          {
            Object
              .values(svgs)
              .map(
                (svg, idx) => {
                  return (
                    <ShareLink
                      key={idx}
                      platform={svg.props.id}
                      platformIcon={svg}
                      redirect={svg.props.redirect}
                    />
                  );
                }
              )
          }
        </ul>
      </div>
    </div>
  );
}

export default Modal;