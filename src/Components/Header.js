import React, {useState} from 'react';
import Authentication from './Authentication';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header(props) {

let [show, setShow] = useState(false);

    return (
			<div>
                <h1>Legato</h1>
				<Button onClick={() => setShow(true)}>Login</Button>
				<Modal show={show} closeButton onHide={() => setShow(false)}>
					<Modal.Body>
						<Authentication />
					</Modal.Body>
				</Modal>
				<Button>
					<AmplifySignOut />
				</Button>
			</div>
		);
}

export default Header;