import styled from "styled-components";
import type { Picture } from "../types.ts";

const RandomPicsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PictureDiv = styled.div`
    width: 90vw;
    border: white 1px solid;
    margin: 1vh auto;
`

export default function PicturePreview(props: { data:Picture[] }) {
    return (
        <RandomPicsDiv>
            {
                props.data.map((picture) =>
                    <PictureDiv>
                        <h3>Photographer: {picture.author}</h3>
                        <img src={picture.download_url} alt={picture.author}/>
                        <p>Dimensions: {picture.width} x {picture.height}</p>
                        <p>URL: {picture.url}</p>
                    </PictureDiv>
                )
            }
        </RandomPicsDiv>
    )
}