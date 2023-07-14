
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    height: 9vh;
`;

const Header = () => {

    return (
        <Container>
            <Toolbar>
                <div style={{color:"white",fontWeight:"bold", fontSize:"2rem"}}>&#x2770;&#x2710;&#x2771; Code Editor</div>
            </Toolbar>
        </Container>
    )
}

export default Header