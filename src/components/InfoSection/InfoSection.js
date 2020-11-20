import React from 'react'
import { Button, Container } from '../../globalStyles';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine , Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements';
import {Link} from 'react-router-dom';

const InfoSection = ({primary, 
                      lightBg, 
                      imgStart, 
                      lightTopLine, 
                      lightTextDesc, 
                      ButtonLabel, 
                      desc, 
                      lightText, 
                      heading, 
                      topLine, 
                      start, 
                      img, 
                      alt}) => {
    return (
        <div>
            <InfoSec lightBg={lightBg}>
                    <Container>
                        <InfoRow imgStart={imgStart}>
                            <InfoColumn>
                                <TextWrapper>
                                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{heading}</Heading>
                                    <Subtitle lightTextDesc={lightTextDesc}>{desc}</Subtitle>
                                    <Link to="/signup">
                                        <Button big fontBig primary={primary}>
                                            {ButtonLabel}
                                        </Button>
                                    </Link>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper start={start}>
                                    <Img src={img} alt={alt} />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
            </InfoSec>
        </div>
    )
}

export default InfoSection
