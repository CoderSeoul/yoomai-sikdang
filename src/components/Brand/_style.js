import styled from 'styled-components';

export const StyledBrand = styled.div`

    
.inner{
    width:100%;
    height:100%;
    padding:100px;
        &-left{
            position:absolute;
            display:flex;
            h1{
                color:#fff;
                font-size:5rem;
                z-index:2;
            }
        }
        &-right{
            position:absolute;
            bottom:50px;
            right:100px;
            display:flex;
            width:40%;         
            p{
                color:#fff;
                font-size:1rem;
                z-index:3;
            }
        }
}


#video-viewport { 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    z-index: -1; 
}
video { 
    display: block; 
    width: 100%; 
    height: auto; 
}

.fullsize-video-bg { 
    height: 100%; 
    overflow: hidden; 
}

.fullsize-video-bg:before { 
    content: ""; 
    background: rgba(0,0,0,.9); 
    position: absolute; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%; 
    z-index: 0; 
}
.fullsize-video-bg:after { 
    content: ""; 
    background-image:radial-gradient(black 1px, transparent 0);
    background-size: 3px 3px; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    z-index: 1; 
}

@media (max-width: 700px) {
    #video-viewport{
        visibility:hidden;
    }
    &__content {
        display: none;
    }
}
}
`;
