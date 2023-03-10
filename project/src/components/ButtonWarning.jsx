import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


function ButtonWarning() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="warning text-light">Browse Categories</Button>

      <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/allcategary">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonWarning;