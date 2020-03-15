import React, { useState } from 'react';
import { connect } from 'react-redux';
import  {addLogs}  from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectionOption';
import PropTypes from 'prop-types';
import M  from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({ html: 'please enter a message and tech'});
        } else {
            const newLog = { 
                message,
                attention,
                tech,
                date: new Date()
            }

            addLogs(newLog);

            M.toast({ html: `Log added by ${tech}` })
            //clear fields

            setMessage('');
            setTech('');
            setAttention(false);

        }
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            Log message
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select name="tech" value={tech} className='browser-default'
                            onChange={e => setTech(e.target.value)}
                            >
                            <option value='' disabled>
                                Select Technician
                            </option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>

                <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} 
                className="modal-close waves-effect waves-light btn">
                Enter
                </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired
}

export default connect(null, { addLogs })(AddLogModal);
