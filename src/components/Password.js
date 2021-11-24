import React from 'react';
import zxcvbn from 'zxcvbn';

const Passwordmeter = ({ epass }) => {
    const test = zxcvbn(epass);
    const num = test.score * 100 / 4;

    const createpasslable = () => {
        switch (test.score) {
            case 0:
                return 'very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    }

    const funcProgresscolor = () => {
        switch (test.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changecolor = () => ({ width: `${num}%`, background: funcProgresscolor(), height: '7px' })

    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={changecolor()}>
                </div>
            </div>
            <p style={{color: funcProgresscolor() }}>{createpasslable()}</p>
        </>
    )
}
export default Passwordmeter;