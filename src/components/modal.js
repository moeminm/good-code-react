import React from "react";

const Modal = ({ modal: { id, image, title, features, link } }) => {
    return(
        <>
        <div className="modal fade design" id='jjo' tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="challenges__card--img">
                    <img src={image} />
                </div>
                <div className="modal__included">
                    <h1 className='modal__title'>What's Included?</h1>
                        <div className="modal__one">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                            {features
              ? features.map(feature => <span className="challenges__tag">{feature}</span>)
              : ""}
                        </div>
                        <strong>Don't forget to submit your code to /r/GoodCodeChallenge!</strong>
                </div>
            </div>
            <div className="modal-footer">
                    <a href={link} className='cta download' target="_blank">Download Challenge</a>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Modal;