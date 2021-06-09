import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function BootstrapHeader() {
    return (
        <div>
            <NavBar bg="danger" variant="dark">
                <Navbar.Brand>My Portfolio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About Me </Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                    <Nav.Link href="/awards">Awards</Nav.Link>
                </Nav>

            </NavBar>
    </div >
    )

}

export default BootstrapHeader