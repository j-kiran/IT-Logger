import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTechs } from '../../actions/techActions';
import M  from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTechs }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({ html: 'please enter the first and Last Name'});
        } else {
            addTechs ({
                firstName,
                lastName
            })

            M.toast({ html: `${firstName} ${lastName} was added as a tech`});

            //clear fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>New Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                             firstName
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                        lastName
                        </label>
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

AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
}

export default connect(null, { addTechs })(AddTechModal);
