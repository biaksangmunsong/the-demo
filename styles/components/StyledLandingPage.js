import styled from "styled-components"

const StyledLandingPage = styled.div`
    display: block;
    width: 100%;
    overflow: hidden;
    min-height: 100vh;
    background: #000000;
    
    header {
        display: block;
        width: 100%;
        padding-top: 30px;
        position: relative;
        z-index: 50;

        @media screen and (max-width: 1200px){
            padding-top: 25px;
        }

        @media screen and (max-width: 1000px){
            padding-top: 20px;
        }

        @media screen and (max-width: 600px){
            padding-top: 15px;
        }

        @media screen and (max-width: 500px){
            padding-top: 10px;
        }
        
        .sub-container {
            display: block;
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            
            .title {
                display: block;
                width: 100%;
                font-size: 1.5rem;
                font-weight: 700;
                color: #ffffff;
                text-align: center;
                position: relative;
                z-index: 1;

                em {
                    font-weight: 400;
                }
                
                span {
                    font-size: 130%;
                }
                
                @media screen and (max-width: 600px){
                    font-size: 1.3rem;
                }

                @media screen and (max-width: 400px){
                    font-size: 1.15rem;
                }
            }
            
            .icons {
                display: inline-block;
                vertical-align: middle;
                position: absolute;
                z-index: 2;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                a {
                    display: inline-block;
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    padding: 2px;

                    &:last-child {
                        margin-right: 0;
                    }

                    svg {
                        display: block;
                        width: 100%;
                        height: 100%;

                        path {
                            fill: #ffffff;
                            transition: .2s ease-in-out;
                        }
                    }
                    
                    &:hover {
                        svg {
                            path {
                                fill: #ff0000;
                            }
                        }
                    }
                }

                @media screen and (max-width: 1000px){
                    display: none;
                }
            }
        }
    }
    
    .intro {
        display: block;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto 20px auto;
        padding: 8rem 0;
        font-size: 0;
        position: relative;
        border-bottom: 1px solid #222222;

        @media screen and (max-width: 1200px){
            padding: 6rem 0;
        }

        @media screen and (max-width: 850px){
            padding: 6rem 0 3rem 0;
        }

        @media screen and (max-width: 600px){
            padding: 5rem 0 3rem 0;
            margin-bottom: 15px;
        }

        @media screen and (max-width: 400px){
            padding: 4rem 0 2rem 0;
        }
        
        .words {
            display: block;
            width: 45%;
            position: relative;
            z-index: 2;
            perspective: 1000px;

            @media screen and (max-width: 1000px){
                width: 100%;
                text-align: center;
            }
            
            h1 {
                display: block;
                width: 100%;
                line-height: 4rem;
                font-size: 3.5rem;
                color: #ffffff;
                font-weight: 700;
                text-align: left;
                text-transform: capitalize;

                @media screen and (max-width: 1200px){
                    line-height: 3.8rem;
                    font-size: 3.2rem;
                }

                @media screen and (max-width: 1000px){
                    max-width: 600px;
                    margin: 0 auto;
                    text-align: center;
                }

                @media screen and (max-width: 800px){
                    line-height: 3.6rem;
                    font-size: 3rem;
                }

                @media screen and (max-width: 600px){
                    line-height: 3rem;
                    font-size: 2.5rem;
                }

                @media screen and (max-width: 500px){
                    line-height: 2.6rem;
                    font-size: 2.2rem;
                }

                @media screen and (max-width: 400px){
                    line-height: 2.5rem;
                    font-size: 1.85rem;
                }
            }

            h2 {
                display: block;
                width: 100%;
                line-height: 1.6rem;
                font-size: 1.1rem;
                color: #ffffff;
                font-weight: 400;
                text-align: left;
                margin: 10px 0 50px 0;

                @media screen and (max-width: 1000px){
                    max-width: 600px;
                    margin: 10px auto 50px auto;
                    text-align: center;
                }

                @media screen and (max-width: 600px){
                    font-size: 1rem;
                }

                @media screen and (max-width: 500px){
                    line-height: 1.3rem;
                    font-size: .85rem;
                }
            }
            
            .call-to-action {
                display: inline-block;
                vertical-align: middle;
                position: relative;
                overflow: hidden;
                background: #ff0000;

                @media screen and (max-width: 600px){
                    display: block;
                    width: 100%;
                    max-width: 360px;
                    margin: 0 auto;
                    padding: 0;
                }
                
                span {
                    display: block;
                    width: 100%;
                    line-height: 3.5rem;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                    text-align: left;
                    position: relative;
                    z-index: 2;
                    padding: 0 64px 0 20px;
                    transition: .2s ease-in-out;
                    
                    svg {
                        display: block;
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        z-index: 3;
                        top: 50%;
                        right: 20px;
                        transform: translateY(-50%);
                        
                        path {
                            stroke: #ffffff;

                            &.filled {
                                fill: #ffffff;
                                stroke: none;
                            }
                        }
                    }

                    @media screen and (max-width: 600px){
                        font-size: .9rem;
                    }
                }
                
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: -101%;
                    z-index: 1;
                    background: #ffffff;
                    transition: .2s ease-in-out;
                }
                
                &:hover {
                    span {
                        color: #222222;
                    }
                    
                    &::before {
                        left: 0;
                    }
                }
            }
        }

        .image {
            display: block;
            width: 100%;
            perspective: 1000px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -25%;
            z-index: 1;

            &::before {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                background: linear-gradient(to right, #000000, transparent);
                
                @media screen and (max-width: 1000px){
                    background: linear-gradient(to right, rgba(0,0,0,.6), transparent);
                }
            }
            
            @media screen and (max-width: 1000px){
                width: 180%;
                margin: 0 auto;
                position: relative;
                top: 0;
                right: auto;
                left: -40%;
                transform: none;
            }

            @media screen and (max-width: 850px){
                margin: 2rem auto 0 auto;
            }
            
            @media screen and (max-width: 600px){
                width: 230%;
                left: -65%;
            }
            
            @media screen and (max-width: 450px){
                width: 260%;
                left: -80%;
            }

            @media screen and (max-width: 400px){
                margin: 1rem auto 0 auto;
            }
            
            img {
                display: block;
                width: 100%;
                position: relative;
                z-index: 1;
                transform: rotateY(-40deg) rotateX(15deg);
                
                @media screen and (max-width: 1000px){
                    animation: none;
                    transform: rotateY(20deg) rotateX(40deg);
                }
            }
            
            @keyframes skew {
                0% {
                    transform: none;
                }
                33% {
                    transform: rotateY(-40deg) rotateX(20deg);
                }
                66% {
                    transform: rotateY(-20deg) rotateX(10deg);
                }
                100% {
                    transform: rotateY(-30deg) rotateX(15deg);
                }
            }
            
            @keyframes straighten {
                0% {
                    transform: rotateY(-30deg) rotateX(15deg);
                }
                33% {
                    transform: rotateY(26deg) rotateX(-13deg);
                }
                66% {
                    transform: rotateY(-8deg) rotateX(16deg);
                }
                100% {
                    transform: none;
                }
            }
        }
    }

    .section {
        display: block;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto 20px auto;
        padding: 8rem 0;
        position: relative;
        border-top: 1px solid #222222;
        border-bottom: 1px solid #222222;
        
        @media screen and (max-width: 1200px){
            padding: 6rem 0;
        }

        @media screen and (max-width: 600px){
            padding: 5rem 0;
            margin-bottom: 15px;
        }
        
        @media screen and (max-width: 400px){
            padding: 4rem 0;
        }

        .words {
            display: block;
            width: 50%;
            position: relative;
            z-index: 2;

            @media screen and (max-width: 1000px){
                width: 100%;
            }
            
            h3 {
                display: block;
                width: 100%;
                line-height: 4rem;
                font-size: 3.5rem;
                color: #ffffff;
                font-weight: 700;
                text-align: left;
                text-transform: capitalize;

                @media screen and (max-width: 1200px){
                    line-height: 3.8rem;
                    font-size: 3.2rem;
                }

                @media screen and (max-width: 1000px){
                    max-width: 600px;
                    margin: 0 auto;
                    text-align: center;
                }

                @media screen and (max-width: 800px){
                    line-height: 3.6rem;
                    font-size: 3rem;
                }

                @media screen and (max-width: 600px){
                    line-height: 3rem;
                    font-size: 2.5rem;
                }

                @media screen and (max-width: 500px){
                    line-height: 2.6rem;
                    font-size: 2.2rem;
                }

                @media screen and (max-width: 400px){
                    line-height: 2.5rem;
                    font-size: 1.85rem;
                }
            }

            p {
                display: block;
                width: 100%;
                line-height: 1.6rem;
                font-size: 1.1rem;
                color: #ffffff;
                font-weight: 400;
                text-align: left;
                margin-top: 10px;
                
                @media screen and (max-width: 1000px){
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                @media screen and (max-width: 600px){
                    font-size: 1rem;
                }

                @media screen and (max-width: 500px){
                    line-height: 1.3rem;
                    font-size: .85rem;
                }
            }
        }

        .image {
            display: block;
            width: 40%;
            height: 90%;
            position: absolute;
            z-index: 1;
            top: 5%;
            
            &::before {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
            }
            
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
                position: relative;
                z-index: 1;
            }
            
            @media screen and (max-width: 1000px){
                width: 90%;
                max-width: 500px;
                height: auto;
                margin: 0 auto;
                position: relative;
                top: 0;
                margin-top: 6rem;

                img {
                    height: auto;
                    object-fit: normal;
                }
            }

            @media screen and (max-width: 600px){
                margin-top: 5rem;
            }

            @media screen and (max-width: 400px){
                margin-top: 4rem;
            }
        }

        &.movie,
        &.art {
            .words {
                margin-left: 50%;

                @media screen and (max-width: 1000px){
                    margin-left: 0;
                }
            }

            .image {
                left: 0;
            }
        }

        &.music,
        &.photography {
            .words {
                margin-right: 50%;

                @media screen and (max-width: 1000px){
                    margin-right: 0;
                }
            }
            
            .image {
                right: 0;
            }
        }
    }

    .last-section {
        display: block;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto 20px auto;
        padding: 8rem 0;
        border-top: 1px solid #222222;
        border-bottom: 1px solid #222222;

        @media screen and (max-width: 1200px){
            padding: 6rem 0;
        }

        @media screen and (max-width: 600px){
            padding: 5rem 0;
            margin-bottom: 15px;
        }
        
        @media screen and (max-width: 400px){
            padding: 4rem 0;
        }

        h3 {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            line-height: 4rem;
            font-size: 3.5rem;
            color: #ffffff;
            font-weight: 700;
            text-align: center;
            text-transform: capitalize;

            @media screen and (max-width: 1200px){
                line-height: 3.8rem;
                font-size: 3.2rem;
            }
            
            @media screen and (max-width: 1000px){
                max-width: 600px;
            }
            
            @media screen and (max-width: 800px){
                line-height: 3.6rem;
                font-size: 3rem;
            }

            @media screen and (max-width: 600px){
                line-height: 3rem;
                font-size: 2.5rem;
            }

            @media screen and (max-width: 500px){
                line-height: 2.6rem;
                font-size: 2.2rem;
            }

            @media screen and (max-width: 400px){
                line-height: 2.5rem;
                font-size: 1.85rem;
            }
        }

        p {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 10px auto 0 auto;
            line-height: 1.6rem;
            font-size: 1.1rem;
            color: #ffffff;
            font-weight: 400;
            text-align: center;
            
            @media screen and (max-width: 1000px){
                max-width: 600px;
            }

            @media screen and (max-width: 600px){
                font-size: 1rem;
            }

            @media screen and (max-width: 500px){
                line-height: 1.3rem;
                font-size: .85rem;
            }
        }

        .call-to-actions {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 0;
            margin-top: 3rem;
            
            @media screen and (max-width: 600px){
                margin-top: 2.4rem;
            }
            
            a {
                display: inline-block;
                vertical-align: middle;
                position: relative;
                overflow: hidden;
                background: #ff0000;

                &:first-child {
                    margin-right: 10px;
                }

                @media screen and (max-width: 600px){
                    display: block;
                    width: 100%;
                    max-width: 360px;
                    margin: 0 auto;
                    padding: 0;
                    
                    &:first-child {
                        margin: 0 auto 10px auto;
                    }
                }
                
                span {
                    display: block;
                    width: 100%;
                    line-height: 3.5rem;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                    text-align: left;
                    position: relative;
                    z-index: 2;
                    padding: 0 64px 0 20px;
                    transition: .2s ease-in-out;
                    
                    svg {
                        display: block;
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        z-index: 3;
                        top: 50%;
                        right: 20px;
                        transform: translateY(-50%);
                        
                        path {
                            stroke: #ffffff;

                            &.filled {
                                fill: #ffffff;
                                stroke: none;
                            }
                        }
                    }

                    @media screen and (max-width: 600px){
                        font-size: .9rem;
                    }
                }
                
                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: -101%;
                    z-index: 1;
                    background: #ffffff;
                    transition: .2s ease-in-out;
                }
                
                &:hover {
                    span {
                        color: #222222;
                    }
                    
                    &::before {
                        left: 0;
                    }
                }
            }
        }
    }

    footer {
        display: block;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto;
        border-top: 1px solid #222222;
        padding: 2rem 0;
        
        p {
            display: block;
            width: 100%;
            line-height: 1.6rem;
            font-size: 1.1rem;
            color: #ffffff;
            font-weight: 400;
            text-align: center;
            margin-top: 10px;

            .title {
                display: inline;
                font-weight: 700;
                
                em {
                    font-weight: 400;
                }
                
                span {
                    font-size: 130%;
                }
            }
            
            @media screen and (max-width: 1000px){
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }

            @media screen and (max-width: 600px){
                font-size: 1rem;
            }

            @media screen and (max-width: 500px){
                line-height: 1.3rem;
                font-size: .85rem;
            }
        }
    }
`

export default StyledLandingPage