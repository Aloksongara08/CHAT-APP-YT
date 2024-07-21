import React, { useState } from 'react';

const GenderCheckbox = () => {
    const [selectedGender, setSelectedGender] = useState({ male: false, female: false });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setSelectedGender(prevState => ({ ...prevState, [name]: checked }));
    };

    return (
        <div className='flex'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer' htmlFor='male-checkbox'>
                    <span className='label-text'>Male</span>
                    <input
                        id='male-checkbox'
                        type='checkbox'
                        name='male'
                        className='checkbox border-slate-900'
                        checked={selectedGender.male}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer' htmlFor='female-checkbox'>
                    <span className='label-text'>Female</span>
                    <input
                        id='female-checkbox'
                        type='checkbox'
                        name='female'
                        className='checkbox border-slate-900'
                        checked={selectedGender.female}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
