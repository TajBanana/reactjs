import Inputs from "../User/User";
import styled from "styled-components";

const CardContent = styled.div`
  text-align: center;
  border-color: black;
  width: 100%;
`

const Card = (props) => {
    return (
        <CardContent>
            <Inputs/>
        </CardContent>
    )
}

export default Card;
