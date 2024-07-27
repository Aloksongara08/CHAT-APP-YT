import React from 'react';

const GenderCheckbox = ({ selectedGender, onCheckboxChange }) => {
    const handleChange = (event) => {
        onCheckboxChange(event.target.value);
    };

    return (
        <div className='flex'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer' htmlFor='male-radio'>
                    <span className='label-text'>Male</span>
                    <input
                        id='male-radio'
                        type='radio'
                        name='gender'
                        value='male'
                        className='radio border-slate-900'
                        checked={selectedGender === 'male'}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer' htmlFor='female-radio'>
                    <span className='label-text'>Female</span>
                    <input
                        id='female-radio'
                        type='radio'
                        name='gender'
                        value='female'
                        className='radio border-slate-900'
                        checked={selectedGender === 'female'}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
