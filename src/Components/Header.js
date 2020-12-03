import React from 'react';
import Authentication from './Authentication';
import {AmplifySignOut } from '@aws-amplify/ui-react';

function Header(props) {
    return (
        <div>
            <Authentication />
            <AmplifySignOut />
        </div>
    );
}

export default Header;