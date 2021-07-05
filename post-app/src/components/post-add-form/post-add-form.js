import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="About what are you thinking right now?"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                onClick={()=>onAdd('Hello')}>
            Add post</button>
        </div>
    )
}

export default PostAddForm;