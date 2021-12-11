import React from "react";
import styled from "styled-components";
import { Title } from '../Styles/title';


const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;
export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    p {
        color: black;
    }
`;
const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    background-color: blue;
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(Title)`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    font-size: 30px;
    padding-left: 3%;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

export function Details({charName, charAge, openCharacter, setOpenCharacter}) {
    function close() {
        setOpenCharacter();
    }
    if(!openCharacter) return null;
        return (
            <>
            <DialogShadow onClick={close} />
            <Dialog>
                <DialogBanner>
                    <DialogBannerName>{charName}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <p>{charAge}</p>

                </DialogContent>
            </Dialog>
            </>
        )
}


