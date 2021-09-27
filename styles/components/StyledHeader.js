import styled from "styled-components"

const StyledHeader = styled.header`
    display: block;
    width: 100%;
    height: 70px;
    background: #111111;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .sub-container {
        display: block;
        width: 90%;
        height: 100%;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;

        .title {
            display: inline-block;
            vertical-align: middle;
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            text-align: left;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            
            span {
                font-size: 130%;
            }
        }
    }
`

export default StyledHeader