import React from 'react';

export const MissionKey = () => {
    return (
        <div className="my-3" style={{ position: 'sticky', top: 50 }}>
            <p>
                <span className="px-3 mr-2 bg-success" /> = Success
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger" /> = Failed
            </p>
        </div>
    );
};
export default MissionKey;
