import styled from 'styled-components'
import Video from './Video'

const Features = () => {
    const features = [
        {
            title: "Export Format",
            desc: "Export the video in mp4, mkv, webem or avi. Saving the video onto the device depends on the time of recording",
            id: "rias2wobv4",
            align: 'left'
        },
        {
            title: "Quality of the video",
            desc: "Depending you your screen lapse suppots from 8k to 144p resolution",
            id: "p2q18pn0r5",
            align: "right"
        }, {
            title: "Export Format",
            desc: "Export the video in mp4, mkv, webem or avi. Saving the video onto the device depends on the time of recording",
            id: "11cz43suow",
            align: 'left'
        },

    ]
    return (
        <Wrapper id="features">
            <Heading>
                Features
        </Heading>
            <Grid>
                {
                    features.map((f, i) => (
                        <Item key={`feature-${i}`}>
                            {/* {f.align === 'left' ? <> */}
                            <VideoEmbed id={f.id} />
                            <Content>
                                <Chead>{f.title} </Chead>
                                <Cdesc>{f.desc} </Cdesc>
                            </Content>
                            {/* </> :
                                <>
                                    <Content>
                                        <Chead>{f.title} </Chead>
                                        <Cdesc>{f.desc} </Cdesc>
                                    </Content>
                                    <VideoEmbed id={f.id} />
                                </>
                            } */}
                        </Item>
                    ))
                }
            </Grid>
        </Wrapper>
    )
}

const VideoEmbed = ({ id }) => (
    <VideoWrapper>
        <Video embedId={id} />
    </VideoWrapper>
)

const VideoWrapper = styled.div`
    height:200px;
    width:300px;
    overflow:hidden;
    margin-bottom:30px;
`;

const Wrapper = styled.div`
    max-width:1024px;
    margin:auto;
    margin-top:50px;
`

const Heading = styled.h1`
    font-size:2.4rem;
    padding:20px 0px;
`
const Grid = styled.div`
    display:flex;
    flex-direction:column;
`;
const Item = styled.div` 
display:flex;
@media (max-width:718px){
    &{
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
} 
`;
const Content = styled.div`
`;
const Chead = styled.div`
    font-size: 1.6rem;
    padding: 10px;
    `;
const Cdesc = styled.div`
    padding: 10px;
`;

export default Features;