import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
 
    width: ${props => props.size && props.size.width};
    height: ${props => props.size && props.size.height};

    padding: 0 32px;
    font-size: 16px;
    border-radius: 80px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    user-select: none;

    background-color: ${props => 
        props.outlined 
        ? Colors.white
        : props.disabled
        ? Colors.greyFiftyPercent
        : Colors.secondary
    };
    color: ${props =>
        props.outlined 
        ? Colors.black
        : Colors.white
    };
    border: ${props =>
        props.outlined
        ? `1px solid ${Colors.greyFiftyPercent}`
        : "none"
    };

    &:hover{
        color: ${props =>
          props.outlined
            ? Colors.black
            : Colors.white
        };
        background-color: ${props =>
            props.outlined
            ? Colors.greyTwentyPercent
            : props.disabled
            ? Colors.greyFiftyPercent
            : Colors.darkSecondary
        };
    };
`;
